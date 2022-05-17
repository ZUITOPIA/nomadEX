import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./Group.module.css";
import Load from '../component/Load';

const Arr = [1, 2, 3, 4, 5];

function MoviesBox() {
  const {group, page} = useParams();
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    setLoading();
    getMovies();
    return ;
  }, [params])

  return (
    <div className={styles.container}>
      {
        (loading)
          ? <Load />
          :
          <div className={styles.movies}>
            {movies.map((movie) => (
              <MovieGroup
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                description={movie.description}
                genres={movie.genres} />
            ))}
          </div>
      }
      {
        (loading)
          ? null
          :
          <div className={styles.footer}></div>
        }
    </div>
  )
}

export default MoviesBox;