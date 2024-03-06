import "./App.css";
// import Accordiance from "./Component/accordiance";
// import RandomColor from "./Component/random-color/index";
// import ImageSlider from "./Component/slides/PhotoSlide";
// import StarRating from "./Component/StarRating/StarRating";
// import LoadMoreData from "./Component/LoadMoreData/LoadMoreData";
// import MainTabs from "./Component/Tabs/MainTabs";
// import TestModal from "./Component/Modal/TestModal";
// import GitHubProfile from "./Component/SearchGitHubProfile/GitHubProfile";
// import SuggestUser from "./Component/SearchAutoCompletion/SuggestionUser";
// import TicTacsToe from "./Component/tic-tac";
import Featureflage from "./Component/FeatureFlag";
import FeatureFlagGlobalState from "./Component/FeatureFlag/context/index";
function App() {
  return (
    <>
      {/* <RandomColor>
        <TicTacsToe/>
        <GitHubProfile/>
        <TestModal />
        <MainTabs />
        <SuggestUser/>
        <Accordiance />
        <StarRating />
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        />
        <LoadMoreData />
      </RandomColor> */}
      <FeatureFlagGlobalState>
        <Featureflage />
      </FeatureFlagGlobalState>
    </>
  );
}

export default App;
