import React from 'react';

export default function Movies({ movies }) {
    return (
        <div>
            {movies?.map((singleMovie, index) => (
                <div key={index}>
                    <h2>{singleMovie.title}</h2>
                </div>
            ))}
        </div>
    );
}
