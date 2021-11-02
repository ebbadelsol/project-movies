import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { POPULAR_URL_LIST } from "utils/urls";
import "../css/overview.css";

export const PopularOverview = () => {
	const [popularOverview, setPopularOverview] = useState([]);

	useEffect(() => {
		fetch(POPULAR_URL_LIST)
			.then((response) => response.json())
			.then((data) => setPopularOverview(data.results));
	}, []);

	return (
		<div className="movie-grid">
			{popularOverview.map((movie) => (
				<Link className="movie-container" key={movie.id} to={`/movies/${movie.id}`}>
					<img className="movie-poster" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
					<div className="overlay-container">
						<h1 className="movie-title">{movie.title}</h1>
						<p className="release-date">{movie.release_date}</p>
					</div>
				</Link>
			))}
		</div>
	);
};