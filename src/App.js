import React, { Component } from "react";
import CountryStateCity from "./CountryStateCity";
import Movies from "./Movies";
import { search } from "./utils";

class App extends Component {
	state = {
		movies: null,
		loading: false,
		value: "",
	};

	search = async (val) => {
		this.setState({ loading: true });
		const res = await search(
			`https://api.themoviedb.org/3/search/movie?api_key=dbc0a6d62448554c27b6167ef7dabb1b&query=${val}`
		);
		this.setState({ movies: res, loading: false });
	};

	onChangeHandler = async (e) => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
	};

	get renderMovies() {
		let movies;
		if (this.state.movies) {
			movies = <Movies movies={this.state.movies} />;
		}

		return movies;
	}
	render() {
		return (
			<div>
				<input
					value={this.state.value}
					onChange={(e) => this.onChangeHandler(e)}
					placeholder="Type something to search"
				/>
				{this.renderMovies}

                <CountryStateCity />
			</div>
		);
	}
}

export default App;