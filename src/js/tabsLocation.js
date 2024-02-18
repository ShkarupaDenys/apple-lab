//  adress tabs
const tabButtons = document.querySelectorAll('.accordion__tabs-btn');
const tabs = document.querySelectorAll('.accordion__tabs-content');

if (tabButtons.length) {
  tabButtons[0].classList.toggle('selected', true);
  tabs[0].classList.toggle('hidden', false);

  tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('mouseover', (e) => {
      tabButtons.forEach((tabBtn) => {
        tabBtn.classList.remove('selected');
      });

      e.target.classList.toggle('selected', true);

      const selectedTabId = e.target.dataset.tabContentId;
      const selectedTab = document.getElementById(selectedTabId);

      Array.from(selectedTab.parentNode.children).forEach((tab) => {
        tab.classList.toggle('hidden', true);
      });
      selectedTab.classList.toggle('hidden', false);
    });
  });
}
