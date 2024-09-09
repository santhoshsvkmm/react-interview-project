import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Search from "./components/searchComponent/searchComponent";
import GridComponent from "./components/girdComponent/gridComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function movieReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        loading: false,
      };
    }
    case "getAllMovie": {
      return {
        ...state,
        data: action.data,
        pageTitle: action.pageTitle,
        loading: false,
      };
    }

    case "getError": {
      return {
        ...state,
        error: state.error,
        loading: false,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  loading: false,
  data: [],
  pageTitle: "",
  error: null,
};

function App() {
  const [moviesList, dispatch] = useReducer(movieReducer, initialState);
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  const actionGetAll = async () => {
    const url = "https://test.create.diagnal.com/data/page1.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      dispatch({
        type: "getAllMovie",
        data: json.page["content-items"].content,
        pageTitle: json.page.title,
        loading: false,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value.length == 0) {
      actionGetAll();
      setSearchValue("");
    } else {
      setSearchValue(value);
    }
  };
  useEffect(() => {
    actionGetAll();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setSearchValue("");
    }
  }, [isVisible]);

  useEffect(() => {
    if (searchValue.length > 0 && moviesList.data.length > 0) {
      const filteredMovies = moviesList.data.filter((movie) =>
        movie.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      dispatch({
        type: "getAllMovie",
        data: filteredMovies,
        loading: false,
      });
    }
  }, [searchValue]);

  return (
    <div className="App">
      <header className="App-header">
        <Search
          searchValue={searchValue}
          isVisible={isVisible}
          toggleSearch={toggleSearch}
          handleSearch={handleSearch}
        />
      </header>
      <main>
        <section>
          <div className="">
            <h2>
              {" "}
              <FontAwesomeIcon className="back-icon" icon={faArrowLeft} />
              {moviesList.pageTitle}
            </h2>
          </div>
          <div className="movie-grid">
            {moviesList.data.length > 0 ? (
              moviesList.data.map((movie, index) => (
                <GridComponent key={index} index={index} movie={movie} />
              ))
            ) : (
              <div className="response-negative-message">
                No Movies are found
              </div>
            )}
          </div>
       
        </section>
      </main>
    </div>
  );
}

export default App;
