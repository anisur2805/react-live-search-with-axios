import React from 'react';

export default function Movies({ list }) {
    return (
        <div>
            {list.map((singleMovie, index) => (
                <div key={index}>
                    <h2>{singleMovie.title}</h2>
                </div>
            ))}
        </div>
    );
}
