import React, { useState } from "react";
import axios from 'axios';
import Results from "./Results";
import Photos from "./Photos";

import './App.css';

export default function Dictionary(props) {

   let [keyword, setKeyword] = useState(props.defaultKeyword);
   let [results, setResults] = useState(null);
   let [loaded, setLoaded] = useState(false);
   let [photos, setPhotos] = useState(null);

function handleApiResponse (response){
      setResults(response.data[0]);
   }

   function handlePexelsResponse(response){
      setPhotos(response.data.photos);
   }

   function search() {
    // documentation: https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
      axios.get(apiUrl).then(handleApiResponse)

   let pexelsApiKey = "563492ad6f91700001000001909eb8cdb555407b8d711f636d1682b2";
   let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
   let headers = { Authorization: `Bearer ${pexelsApiKey}` };
   axios.get(pexelsApiUrl, { headers: headers }).then
   (handlePexelsResponse);
}

   function handleSubmit(event) {
      event.preventDefault();
      search();
}

   function handleKeywordChange(event){
      setKeyword(event.target.value);
}

function load(){
   setLoaded(true);
   search();
}

if(loaded) {
  return (
  <div className="Dictionary">
     <section>
        <h6 className="question">What word do you want to look up?</h6>
     <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} placeholder=" Type a word..." autoFocus="on"/>
        </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />

        </div>
        );
} else {
   load();
   return "Loading...";
}
}