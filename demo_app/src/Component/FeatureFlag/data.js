
const dummyAPIResponce = {
  RandomColor: true,
  showTicTacsToe: false,
  showGitHubProfile: false,
  showTestModal: false,
  showMainTabs: false,
  showSuggestUser: false,
  showAccordiance: false,
  showStarRating: false,
  showImageSlider: false,
  showLoadMoreData: false,
};

export const fetureFlagDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponce) {
      setTimeout(() => resolve(dummyAPIResponce), 500);
    } else {
      reject("something went wrong");
    }
  });
};