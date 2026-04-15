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
  chrome.storage.sync.get(getSettingsDefaults(), (data) => {
    callback({ ...getSettingsDefaults(), ...data });
  });
}

function saveSettings(settingsObj, callback) {
  chrome.storage.sync.set(settingsObj, callback || (() => {}));
}
