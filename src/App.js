import { useState } from "react";
import "./App.css";
import flags from "./data/flag_data";

const App = () => {
  const [translatedText, setTranslatedText] = useState(
    "❝ Translation will appear here ❞"
  );

  const [recentFlagSearches, setRecentFlagSearches] = useState([]);

  const addToRecent = userInput => {
    let isAlreadyRecent = false;
    recentFlagSearches.forEach(recentFlagSearch => 
      recentFlagSearch === userInput ? isAlreadyRecent = true : null);
    if (!isAlreadyRecent) {
      recentFlagSearches.push(userInput);
      setRecentFlagSearches(recentFlagSearches);
    }
  };

  const translateFlag = event => {
    const userInput = event.target.value.trim();

    if (userInput === "") setTranslatedText("❝ Translation will appear here ❞");
    else {
      const allFlags = Object.keys(flags);
      let isFlagFound = false;
      for (let flagIndex = 0; flagIndex < allFlags.length; flagIndex++) {
        const flag = allFlags[flagIndex];
        if (flag === userInput) {
          isFlagFound = true;
          break;
        }
      }

      if (isFlagFound) {
        setTranslatedText(flags[userInput]);
        addToRecent(userInput);
      } else setTranslatedText("❝ Flag not found❞");
    }
  };

  const translateOnClick = event => {
    const userInput = event.target.innerText;
    setTranslatedText(flags[userInput]);
    addToRecent(userInput);
  };

  return (
    <div className="App">
      <h1 className="brand-name">Flag Mania</h1>
      <input
        onChange={translateFlag}
        className="flag-input"
        type="text"
        placeholder="Enter your flag here"
      />
      <p className="translation">{translatedText}</p>

      <div>
        <h3 className="popular-searches-label">Popular searches - </h3>
        <p className="popular-searches">
          <span className="popular-search-item" onClick={translateOnClick}>
            🇮🇳
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🇺🇸
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🇨🇳
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🇯🇵
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🇷🇺
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🇦🇺
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🇨🇦
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🏴‍☠️
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🏁
          </span>

          <span className="popular-search-item" onClick={translateOnClick}>
            🏳️
          </span>
        </p>
      </div>

      <div>
        <h3 className="recent-searches-label">Recent searches - </h3>
        <p className="recent-searches">
          <span className="recent-search-item" onClick={translateOnClick}>
            {recentFlagSearches[recentFlagSearches.length - 1]}
          </span>
          <span className="recent-search-item" onClick={translateOnClick}>
            {recentFlagSearches[recentFlagSearches.length - 2]}
          </span>
          <span className="recent-search-item" onClick={translateOnClick}>
            {recentFlagSearches[recentFlagSearches.length - 3]}
          </span>
          <span className="recent-search-item" onClick={translateOnClick}>
            {recentFlagSearches[recentFlagSearches.length - 4]}
          </span>
          <span className="recent-search-item" onClick={translateOnClick}>
            {recentFlagSearches[recentFlagSearches.length - 5]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
