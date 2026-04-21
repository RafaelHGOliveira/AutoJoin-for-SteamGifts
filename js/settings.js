// Call this function when #settingsDiv is present on the page.

function fillSettingsDiv(s) {
  try {
  document.getElementById('chkAutoJoinButton').checked =
    s.AutoJoinButton;
  document.getElementById('chkAutoDescription').checked =
    s.AutoDescription;
  document.getElementById('chkAutoComment').checked = s.AutoComment;
  document.getElementById('txtAutoComment').value = s.Comment;
  document.getElementById('chkInfiniteScroll').checked =
    s.InfiniteScrolling;
  document.getElementById('chkShowPoints').checked = s.ShowPoints;
  document.getElementById('chkShowButtons').checked = s.ShowButtons;
  document.getElementById('chkLoadFive').checked = s.LoadFive;
  document.getElementById('chkHideDlc').checked = s.HideDlc;
  document.getElementById('chkHideEntered').checked = s.HideEntered;
  document.getElementById('chkHideGroups').checked = s.HideGroups;
  document.getElementById('chkHideNonTradingCards').checked =
    s.HideNonTradingCards;
  document.getElementById('chkHideWhitelist').checked = s.HideWhitelist;
  document.getElementById('hideLevelsBelow').value = s.HideLevelsBelow;
  document.getElementById('hideCostsBelow').value = s.HideCostsBelow;
  document.getElementById('hideLevelsAbove').value = s.HideLevelsAbove;
  document.getElementById('hideCostsAbove').value = s.HideCostsAbove;
  document.getElementById('chkNightTheme').checked = s.NightTheme;
  // document.getElementById("chkLevelPriority").checked = s.LevelPriority;
  document.getElementById('chkRepeatIfOnPage').checked =
    s.RepeatIfOnPage;
  document.getElementById('chkIgnoreGroups').checked = s.IgnoreGroups;
  document.getElementById('chkIgnorePinned').checked = s.IgnorePinned;
  document.getElementById('chkIgnoreWhitelist').checked =
    s.IgnoreWhitelist;
  document.getElementById('chkIgnoreGroupsBG').checked =
    s.IgnoreGroupsBG;
  document.getElementById('chkIgnorePinnedBG').checked =
    s.IgnorePinnedBG;
  document.getElementById('chkEnableBG').checked = s.BackgroundAJ;
  document.getElementById('chkGroupPriority').checked = s.PriorityGroup;
  document.getElementById('chkRegionPriority').checked =
    s.PriorityRegion;
  document.getElementById('chkWhitelistPriority').checked =
    s.PriorityWhitelist;
  document.getElementById('chkWishlistPriority').checked =
    s.PriorityWishlist;
  document.getElementById('chkLevelPriorityBG').checked =
    s.LevelPriorityBG;
  document.getElementById('chkOddsPriorityBG').checked =
    s.OddsPriorityBG;
  document.getElementById('chkPlayAudio').checked = s.PlayAudio;
  document.getElementById('audioVolume').value = s.AudioVolume;
  document.getElementById('chkShowChance').checked = s.ShowChance;
  document.getElementById('hoursField').value = s.RepeatHours;
  document.getElementById('pagestoload').value = s.PagesToLoad;
  document.getElementById('pagestoloadBG').value = s.PagesToLoadBG;
  document.getElementById('pageforBG').value = s.PageForBG;
  document.getElementById('delayBG').value = s.DelayBG;
  document.getElementById('delay').value = s.Delay;
  document.getElementById('minLevelBG').value = s.MinLevelBG;
  document.getElementById('minCost').value = s.MinCost;
  document.getElementById('minCostBG').value = s.MinCostBG;
  document.getElementById('maxCost').value = s.MaxCost;
  document.getElementById('maxCostBG').value = s.MaxCostBG;
  document.getElementById('pointsToPreserve').value = s.PointsToPreserve;
  document.getElementById('chkWishlistPriorityForMainBG').checked =
    s.WishlistPriorityForMainBG;
  document.getElementById('chkIgnorePreserveWishlistOnMainBG').checked =
    s.IgnorePreserveWishlistOnMainBG;
  document.getElementById('chkNotifyLimit').checked = s.NotifyLimit;
  document.getElementById('notifyLimitAmount').value =
    s.NotifyLimitAmount;
  document.getElementById('chkPreciseTime').checked = s.PreciseTime;
  if (s.RepeatHoursBG === 0) {
    document.getElementById('hoursFieldBG').value = '0.5';
  } else {
    document.getElementById('hoursFieldBG').value = s.RepeatHoursBG;
  }
  document.getElementById('chkAutoRedeemKey').checked = s.AutoRedeemKey;
  } catch (err) {
    console.error('[AutoJoin] fillSettingsDiv error:', err);
  } finally {
    settingsAttachEventListeners();
  }
}

function readSettingsFromDOM() {
  return {
    AutoJoinButton: document.getElementById('chkAutoJoinButton').checked,
    AutoDescription: document.getElementById('chkAutoDescription').checked,
    AutoComment: document.getElementById('chkAutoComment').checked,
    Comment: document.getElementById('txtAutoComment').value.trim(),
    InfiniteScrolling: document.getElementById('chkInfiniteScroll').checked,
    ShowPoints: document.getElementById('chkShowPoints').checked,
    ShowButtons: document.getElementById('chkShowButtons').checked,
    LoadFive: document.getElementById('chkLoadFive').checked,
    HideDlc: document.getElementById('chkHideDlc').checked,
    HideEntered: document.getElementById('chkHideEntered').checked,
    HideGroups: document.getElementById('chkHideGroups').checked,
    HideNonTradingCards: document.getElementById('chkHideNonTradingCards').checked,
    HideWhitelist: document.getElementById('chkHideWhitelist').checked,
    HideLevelsBelow: parseInt(document.getElementById('hideLevelsBelow').value, 10),
    HideCostsBelow: parseInt(document.getElementById('hideCostsBelow').value, 10),
    HideLevelsAbove: parseInt(document.getElementById('hideLevelsAbove').value, 10),
    HideCostsAbove: parseInt(document.getElementById('hideCostsAbove').value, 10),
    RepeatIfOnPage: document.getElementById('chkRepeatIfOnPage').checked,
    NightTheme: document.getElementById('chkNightTheme').checked,
    // LevelPriority: document.getElementById("chkLevelPriority").checked,
    LevelPriorityBG: document.getElementById('chkLevelPriorityBG').checked,
    OddsPriorityBG: document.getElementById('chkOddsPriorityBG').checked,
    BackgroundAJ: document.getElementById('chkEnableBG').checked,
    PriorityGroup: document.getElementById('chkGroupPriority').checked,
    PriorityRegion: document.getElementById('chkRegionPriority').checked,
    PriorityWhitelist: document.getElementById('chkWhitelistPriority').checked,
    PriorityWishlist: document.getElementById('chkWishlistPriority').checked,
    IgnoreGroups: document.getElementById('chkIgnoreGroups').checked,
    IgnorePinned: document.getElementById('chkIgnorePinned').checked,
    IgnoreWhitelist: document.getElementById('chkIgnoreWhitelist').checked,
    IgnoreGroupsBG: document.getElementById('chkIgnoreGroupsBG').checked,
    IgnorePinnedBG: document.getElementById('chkIgnorePinnedBG').checked,
    PlayAudio: document.getElementById('chkPlayAudio').checked,
    AudioVolume: document.getElementById('audioVolume').value,
    RepeatHours: document.getElementById('hoursField').value,
    RepeatHoursBG: parseInt(document.getElementById('hoursFieldBG').value, 10),
    PagesToLoad: parseInt(document.getElementById('pagestoload').value, 10),
    PagesToLoadBG: parseInt(document.getElementById('pagestoloadBG').value, 10),
    PageForBG: document.getElementById('pageforBG').value,
    DelayBG: parseInt(document.getElementById('delayBG').value, 10),
    Delay: parseInt(document.getElementById('delay').value, 10),
    MinLevelBG: parseInt(document.getElementById('minLevelBG').value, 10),
    MinCost: parseInt(document.getElementById('minCost').value, 10),
    MinCostBG: parseInt(document.getElementById('minCostBG').value, 10),
    MaxCost: parseInt(document.getElementById('maxCost').value, 10),
    MaxCostBG: parseInt(document.getElementById('maxCostBG').value, 10),
    PointsToPreserve: parseInt(document.getElementById('pointsToPreserve').value, 10),
    WishlistPriorityForMainBG: document.getElementById('chkWishlistPriorityForMainBG').checked,
    IgnorePreserveWishlistOnMainBG: document.getElementById('chkIgnorePreserveWishlistOnMainBG').checked,
    ShowChance: document.getElementById('chkShowChance').checked,
    NotifyLimit: document.getElementById('chkNotifyLimit').checked,
    NotifyLimitAmount: document.getElementById('notifyLimitAmount').value,
    PreciseTime: document.getElementById('chkPreciseTime').checked,
    AutoRedeemKey: document.getElementById('chkAutoRedeemKey').checked,
  };
}

function settingsAttachEventListeners() {
  const saveButtonEl = document.getElementById('btnSetSave');
  saveButtonEl.onclick = () => {
    const settingsToSave = readSettingsFromDOM();
    saveButtonEl.disabled = true;
    saveSettings(settingsToSave, () => {
      saveButtonEl.innerText = 'Settings Saved!';
      setTimeout(() => {
        if (
          document.location.protocol === 'http:' ||
          document.location.protocol === 'https:'
        ) {
          window.location.reload();
        } else {
          saveButtonEl.innerText = 'Save';
          saveButtonEl.disabled = false;
        }
      }, 500);
    });
  };

  // Export settings to a JSON file
  const btnExport = document.getElementById('btnExportSettings');
  if (btnExport) {
    btnExport.onclick = () => {
      const exportSettings = readSettingsFromDOM();
      delete exportSettings.LastKnownLevel;
      const payload = {
        version: 1,
        type: 'autojoin-sg-account-settings',
        exportedAt: new Date().toISOString(),
        settings: exportSettings,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `autojoin-settings-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  }

  // Import settings from a JSON file
  const btnImport = document.getElementById('btnImportSettings');
  const fileInput = document.getElementById('importFileInput');
  if (btnImport && fileInput) {
    btnImport.onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.type !== 'autojoin-sg-account-settings' || !data.settings) {
            alert('Invalid file format.');
            return;
          }
          // eslint-disable-next-line no-restricted-globals
          if (!confirm('Overwrite current settings with imported data?')) {
            return;
          }
          const merged = { ...getSettingsDefaults(), ...data.settings };
          saveSettings(merged, () => {
            fillSettingsDiv(merged);
            alert('Settings imported.');
          });
        } catch (err) {
          alert(`Failed to import: ${err.message}`);
        } finally {
          fileInput.value = '';
        }
      };
      reader.readAsText(file);
    };
  }

  // grant "*://steamcommunity.com/profiles/*" permission
  document.getElementById('chkWishlistPriority').onchange = requirePermissions;
  document.getElementById('chkHideNonTradingCards').onchange = requirePermissions;
  document.getElementById('chkHideDlc').onchange = requirePermissions;
  function requirePermissions(e) {
    if (e.target.checked) {
      // chrome.permissions.* API is not available in content script
      // we'll have to message background script to check if we have it

      // set new event listener for anticipated response
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.granted === 'true') {
          // we have permission, do nothing
        } else {
          // we don't have permission, uncheck this option
          e.target.checked = false;
        }
      });
      chrome.runtime.sendMessage({ task: 'checkPermission', ask: 'true' });
    }
  }

  // to show 0.5 when value goes below 1 in hoursFieldBG field
  document
    .getElementById('hoursFieldBG')
    .addEventListener('input', function () {
      if (this.value === 0) this.value = 0.5;
      else if (this.value % 1 !== 0 && this.value > 1) {
        this.value = parseInt(this.value, 10);
      }
    });

  const settingsCancelElements =
    document.getElementsByClassName('settingsCancel');
  Array.from(settingsCancelElements).forEach((element) => {
    element.addEventListener('click', () => {
      const settingsShadeEl = document.getElementById('settingsShade');
      const settingsDivEl = document.getElementById('settingsDiv');
      settingsShadeEl.classList.remove('fadeIn');
      settingsShadeEl.classList.add('fadeOut');
      settingsDivEl.classList.remove('fadeIn');
      settingsDivEl.classList.add('fadeOut');
    });
  });

  const volumeSlider = document.getElementById('audioVolume');
  volumeSlider.onclick = setAudioVolume;

  processDependentSettings();
}

function setAudioVolume() {
  // play audio when changing volume
  const audio = new Audio(chrome.runtime.getURL('/media/audio.mp3'));
  audio.volume = document.getElementById('audioVolume').value;
  audio.play();
}

/* This is for case when window.innerHeight is less than settings div height. */
function fitSettings() {
  if (
    window.innerHeight < document.getElementById('settingsDiv').clientHeight
  ) {
    document.getElementById('settingsDiv').className += ' fit';
  }
}

/* Show/Hide some settings that don't make sense on their own. */
function processDependentSettings() {
  const AutoJoinButton = document.getElementById('chkAutoJoinButton');
  const EnableBG = document.getElementById('chkEnableBG');
  evalDependent();

  function evalDependent() {
    const DependOnAutoJoinButton = document.querySelectorAll(
      '.dependsOnAutoJoinButton'
    );
    const DependOnBackgroundAutoJoin = document.querySelectorAll(
      '.dependsOnBackgroundAutoJoin'
    );

    DependOnAutoJoinButton.forEach((li) => {
      li.style.display = AutoJoinButton.checked ? 'block' : 'none';
    });

    DependOnBackgroundAutoJoin.forEach((li) => {
      li.style.display = EnableBG.checked ? 'block' : 'none';
    });

    fitSettings();
  }
  AutoJoinButton.onchange = evalDependent;
  EnableBG.onchange = evalDependent;
}
