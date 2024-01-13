//  models tabs
const tabButtons = document.querySelectorAll(".models__btn");
const tabs = document.querySelectorAll(".models__content");

tabButtons[0].classList.toggle("selected", true);
tabs[0].classList.toggle("hidden", false);

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    tabButtons.forEach((tabBtn) => {
      tabBtn.classList.remove("selected")
    });

    e.target.classList.toggle("selected", true);

    const selectedTabId = e.target.dataset.tabContentId;
    const selectedTab = document.getElementById(selectedTabId);

    Array.from(selectedTab.parentNode.children).forEach((tab) => {
      tab.classList.toggle("hidden", true);
    });
    selectedTab.classList.toggle("hidden", false);
  });
});

//  navigation tabs
//const navTabButtons = document.querySelectorAll(".navigation__btn");
//const navContent = document.querySelectorAll(".navigation__content");

//navTabButtons[0].classList.toggle("selected", true);
//navContent[0].classList.toggle("hidden", false);

//navTabButtons.forEach((tabButton) => {
//  tabButton.addEventListener("click", (e) => {
//    navTabButtons.forEach((tabBtn) => {
//      tabBtn.classList.remove("selected")
//    });

//    e.target.classList.toggle("selected", true);

//    const selectedTabId = e.target.dataset.tabContentId;
//    const selectedTab = document.getElementById(selectedTabId);

//    Array.from(selectedTab.parentNode.children).forEach((tab) => {
//      tab.classList.toggle("hidden", true);
//    });
//    selectedTab.classList.toggle("hidden", false);
//  });
//});
