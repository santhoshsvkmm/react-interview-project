import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/searchComponent/searchComponent";
import GridComponent from "./components/girdComponent/gridComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [genereTitle, setGenereTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);


  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  const getAllMovies = async () => {
    const url = "https://test.create.diagnal.com/data/page1.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setGenereTitle(json.page.title);
      setMoviesList(json.page["content-items"].content);
    } catch (error) {
      console.error(error.message);
    }
  };



  const handleSearch = (e) => {
    const{value} = e.target;
    if(value.length === 0) {
      getAllMovies();
    } else {
      setSearchValue(value)
    }
  }
  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    if(!isVisible) {
      setSearchValue("");
      getAllMovies();
    }

  },[isVisible])

  useEffect(() => {
    if(searchValue.length > 0) {
      const filteredMovies = moviesList.filter((movie) =>
        movie.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setMoviesList(filteredMovies)
    }
  }, [searchValue,moviesList]);

  return (
    <div className="App">
      <header className="App-header">
          <Search searchValue={searchValue} isVisible={isVisible} toggleSearch={toggleSearch} handleSearch={handleSearch}/>
      </header>
      <main>
        <section>
          <div className="">
         
            <h2> <FontAwesomeIcon
              className="back-icon"
              icon={faArrowLeft}
            />{genereTitle}</h2>
          </div>
          <div className="movie-grid">
            {moviesList.length > 0 ? (
              moviesList.map((movie, index) => (
                <><GridComponent index={index} movie={movie}/></>
              ))
            ) : (
              <div className="response-negative-message">No Movies are found</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;