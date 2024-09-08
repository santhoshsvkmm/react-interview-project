import React from "react";
import LazyImage from "../../hooks/lazyLoad.hook"; 
const GridComponent = ({index,movie}) => {
     return (
        <div className="movie-item" key={index}>
        <LazyImage
        src={`https://test.create.diagnal.com/images/${movie["poster-image"]}`}
        alt={`${movie.name} Thumbnail`}
        />
        <div className="movie-title">{movie.name}</div>
      </div>
     )
}

export default GridComponent;