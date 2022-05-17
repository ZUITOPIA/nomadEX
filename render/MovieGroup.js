import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css";

function MovieGroup({ id, poster, title, rating, runtime, year }) {
  return (
    <div className={styles.movie}>
      <div className={styles.show}>
          <div className={styles.poster}>
            <img src={poster} alt={title} />
          </div>
          <div>
            <div className={styles.title}>
              <div>
                <h3>
                  <Link to={`/movie/${id}`}>
                    {(title.length > 35)
                      ? `${title.slice(0, 35)}...`
                      : title}
                  </Link>
                </h3>
              </div>
            </div>
            <p>{year ? `year: ${year}` : null}</p>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
          </div>
        </div>
    </div>
  )
}

MovieGroup.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  download_count: PropTypes.number,
  summary: PropTypes.string
}

export default MovieGroup;