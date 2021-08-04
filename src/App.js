import { useState } from "react";
import "./App.css";
import flags from "./data/flag_data";

function App() {
  var [translatedText, setTranslatedText] = useState(
    "❝ Translation will appear here ❞"
  );

  var [recentFlagSearches, setRecentFlagSearches] = useState([]);

  const addToRecent = (userInput) => {
    let isAlreadyRecent = false;
    recentFlagSearches.forEach((recentFlagSearch, recentnessIndex) => {
      if (recentFlagSearch === userInput) {
        isAlreadyRecent = true;
      }
    });
    if (!isAlreadyRecent) {
      recentFlagSearches.push(userInput);
    }
    setRecentFlagSearches(recentFlagSearches);
  };

  const translateFlag = (event) => {
    let userInput = event.target.value.trim();

    if (userInput === "") {
      setTranslatedText("❝ Translation will appear here ❞");
    } else {
      const allFlags = Object.keys(flags);
      let isFlagFound = false;
      for (let flagIndex = 0; flagIndex < allFlags.length; flagIndex++) {
        let flag = allFlags[flagIndex];
        if (flag === userInput) {
          isFlagFound = true;
          break;
        }
      }

      if (isFlagFound) {
        setTranslatedText(flags[userInput]);
        addToRecent(userInput);
        console.log(recentFlagSearches);
      } else {
        setTranslatedText("❝ Invalid Flag ❞");
      }
    }
  };

  const translateRecent = (event) => {
    let userInput = event.target.innerText;
    setTranslatedText(flags[userInput]);
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
        <h3 className="recent-searches-label">Recent searches - </h3>
        <p className="recent-searches">
          <span className="recent-search-item" onClick={translateRecent}>
            {recentFlagSearches[recentFlagSearches.length - 1]}
          </span>
          <span className="recent-search-item" onClick={translateRecent}>
            {recentFlagSearches[recentFlagSearches.length - 2]}
          </span>
          <span className="recent-search-item" onClick={translateRecent}>
            {recentFlagSearches[recentFlagSearches.length - 3]}
          </span>
          <span className="recent-search-item" onClick={translateRecent}>
            {recentFlagSearches[recentFlagSearches.length - 4]}
          </span>
          <span className="recent-search-item" onClick={translateRecent}>
            {recentFlagSearches[recentFlagSearches.length - 5]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
