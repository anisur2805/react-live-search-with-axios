import React from 'react';

export default function Movies({ movies }) {

    return (
        <div>
            {movies?.map((movie, index) => (
                <h2 key={index} >{movie.title}</h2>
            ))}
        </div>
    );
}
