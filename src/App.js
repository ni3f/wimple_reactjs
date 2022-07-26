import "./App.css";
import Header from "./components/header/header";
import MainTitle from "./components/text_components/main_title/main_title";
import SearchBar from "./components/search_bar/search_bar";
import Financers from "./financers/financers";
import ForumTopics from "./components/forum_topic/forum_topics";
import Articals from "./articals/articals";
import Calculators from "./calculators/calculators";
import OtherOptions from "./other_options/other_options";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <MainTitle />
      <div className="subtitle">Find Top Rated Financial Professionals</div>
      <SearchBar />
      <Financers />
      <ForumTopics />
      <Articals />
      <Calculators />
      <OtherOptions />
    </div>
  );
}

export default App;
