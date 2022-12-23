import React, { useState } from "react";
import ActorGrid from "../components/Actors/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/Shows/ShowGrid";
// import { api_get } from "../misc/config";

const Home = () => {
  //using state for storing input
  const [input, setInput] = useState("");
  //using state for storing results
  const [results, setResults] = useState(null);
  //using state for searchoptions
  const [searchOptions, setSearchOptions] = useState("shows");
  //using boolean value to adjust radio button
  const isShowsSearch = searchOptions === "shows";

  const onInputChange = (ev) => {
    //it print the enter value in conole
    //console.log(ev.target.value);
    //sets the input to the entered value
    setInput(ev.target.value);
  };

  const onSearch = () => {
    //api link->https://api.tvmaze.com/search/shows?q=(search category)
    //connect with api with link and input is interpolated to make user friendly search
    fetch(`https://api.tvmaze.com/search/${searchOptions}?q=${input}`)
      //it uses promise
      .then((r) => r.json())
      .then((result) => {
        //consoles the results of search.
        //console.log(result);
        //storing the results states
        setResults(result);
      });

    //done same thing as above just encapsulated it in config.js
    // api_get(`/search/shows?q=${input}`).then((result) => {
    //   //consoles the results of search.
    //   console.log(result);
    // });
  };

  const onKeyDown = (ev) => {
    //it starts the search when enter key pressed
    //keycode for enter key is 13
    if (ev.keyCode === 13) {
      onSearch();
    }
    //console keycode for evry key pressed
    // console.log(ev.keyCode);
  };

  const renderResults = (results) => {
    //if we have no results
    if (results && results.length === 0) {
      return <div>No Results Found</div>;
    }
    //if we have results
    if (results && results.length > 0) {
      //if search is about show then or if search is about people
      return results[0].show
        ? results.map((item) => {
            return <ShowGrid key={item.show.id} data={results} />;
          })
        : results.map((item) => {
            return <ActorGrid key={item.person.id} data={results} />;
          });
    }
    return null;
  };
  //change  the search onclick
  const onRadioButtonChange = (ev) => {
    //consoles how value changes
    // console.log(searchOptions);
    //set searchoption value to respective radio button
    setSearchOptions(ev.target.value);
  };

  return (
    <MainPageLayout>
      <div>
        <input
          type="text"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />

        <br></br>
        {/* adding selective search */}
        <label htmlFor="search-shows">
          Shows
          <input
            type="radio"
            id="search-shows"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioButtonChange}
          />
        </label>
        <label htmlFor="search-actors">
          Actors
          <input
            type="radio"
            id="search-actors"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioButtonChange}
          />
        </label>
        <br></br>
        <button onClick={onSearch}>Search</button>
        <div>
          {
            //renders result is fn to displayed results on app
            renderResults(results)
          }
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Home;
