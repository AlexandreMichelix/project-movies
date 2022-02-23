import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

      console.log(moviesId);

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=edc914e05ded85fa9c4da95db5d306de&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Favoris <span>🙏</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? listData.map((movie) => (
          <Card movie={movie} key={movie.id} />
        )) : <h2>Aucun favoris pour le moment</h2> }
      </div>
    </div>
  );
};

export default UserList;
