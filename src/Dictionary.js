import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(""); // Optional: set default word
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    if (event) event.preventDefault();

    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "GoVCn58Aezl9vwfqH0G0TngesLn6uP89oZfWs0y2kSL3u5CA9Gt9dcB2";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: pexelsApiKey };

    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

useEffect(() => {
  setLoaded(true); // remove search() from here
}, []);


  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word"
        />
        <input type="submit" value="Search" className="search-button" />
        <p className="prompt-text">What word do you want to look up?</p>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
