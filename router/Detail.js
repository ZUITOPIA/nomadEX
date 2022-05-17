import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"
import Loading from "../components/Loading";

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  ).json();
  setMovie(json.data.movie);
  setLoading(false);
  }
  useEffect(()=>{
  getMovie();
})

return (
  <div className={styles.box}>
    {
      loading ? <Loading /> :
      <Detail
      key={movie.id}
      id={movie.id}
      poster={movie.poster}
      description={movie.description}
      background_image={movie.background_image}
      title={movie.title}
      genres={movie.genres}
      rating={movie.rating}
      runtime={movie.runtime}
      style_tag="Detail" />
    }
  </div>
  )
}

export default Detail;