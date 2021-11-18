import React, { Component } from "react";
import Movies from "./Movies";
import { search } from "./utils";

export default class App extends Component {
	state = {
		movies: null,
		loading: false,
		value: "",
	};

	search = async (val) => {
		this.setState({ loading: true });
		const res = await search(
			`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
		);

		const movies = res;

		this.setState({ movies, loading: false });
	};

	onChangeHandler = async (e) => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
	};

	get renderMovies() {
		let movies = <h1>Theres no movies</h1>;
		if (this.state.movies) {
			movies = <Movies list={this.state.movies} />;
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
			</div>
		);
	}
}