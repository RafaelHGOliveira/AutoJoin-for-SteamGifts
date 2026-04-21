// js/settingsManager.js
// Single source of truth for settings defaults.
// Loaded in content scripts via manifest injection and in service worker via importScripts.

function getSettingsDefaults() {
  return {
    AutoJoinButton: false,
    AutoDescription: true,
    AutoComment: false,
    Comment: '',
    IgnoreGroups: false,
    IgnorePinned: true,
    IgnoreWhitelist: false,
    IgnoreGroupsBG: false,
    IgnorePinnedBG: true,
    PageForBG: 'wishlist',
    RepeatHoursBG: 5,
    PagesToLoad: 3,
    PagesToLoadBG: 2,
    BackgroundAJ: false,
    LevelPriorityBG: true,
    OddsPriorityBG: false,
    InfiniteScrolling: true,
    ShowPoints: true,
    ShowButtons: true,
    ShowChance: false,
    LoadFive: false,
    HideDlc: false,
    HideEntered: false,
    HideGroups: false,
    HideNonTradingCards: false,
    HideWhitelist: false,
    HideLevelsBelow: 0,
    HideCostsBelow: 0,
    HideLevelsAbove: 10,
    HideCostsAbove: 50,
    PriorityGroup: false,
    PriorityRegion: false,
    PriorityWhitelist: false,
    PriorityWishlist: true,
    RepeatIfOnPage: false,
    RepeatHours: 5,
    NightTheme: false,
    LevelPriority: false,
    PlayAudio: true,
    AudioVolume: 1,
    Delay: 10,
    DelayBG: 10,
    MaxTimeLeftBG: 0,
    MinLevelBG: 0,
    MinCost: 0,
    MinCostBG: 0,
    MaxCost: -1,
    MaxCostBG: -1,
    PointsToPreserve: 0,
    WishlistPriorityForMainBG: false,
    IgnorePreserveWishlistOnMainBG: false,
    NotifyLimit: false,
    NotifyLimitAmount: 300,
    PreciseTime: false,
    AutoRedeemKey: false,
    LastKnownLevel: 10,
  };
}

function getSettings(callback) {
  chrome.storage.local.get(getSettingsDefaults(), (data) => {
    if (chrome.runtime.lastError) {
      console.error('[AutoJoin] storage.local.get failed:', chrome.runtime.lastError);
      callback(getSettingsDefaults());
      return;
    }
    // One-shot migration: if local is all-defaults but sync has data, copy it over
    const defaults = getSettingsDefaults();
    const allDefault = Object.keys(defaults).every(
      (k) => JSON.stringify(data[k]) === JSON.stringify(defaults[k])
    );
    if (allDefault && chrome.storage.sync) {
      chrome.storage.sync.get(defaults, (syncData) => {
        if (chrome.runtime.lastError || !syncData) {
          callback({ ...defaults, ...data });
          return;
        }
        const merged = { ...defaults, ...syncData };
        chrome.storage.local.set(merged, () => callback(merged));
      });
      return;
    }
    callback({ ...defaults, ...data });
  });
}

function saveSettings(settingsObj, callback) {
  chrome.storage.local.set(settingsObj, () => {
    if (chrome.runtime.lastError) {
      console.error('[AutoJoin] storage.local.set failed:', chrome.runtime.lastError);
    }
    if (callback) callback();
  });
}
