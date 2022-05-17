import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {

  const GenreObject = { "Romance": "genre=romance", "Music": "genre=music", "Animation": "genre=animation" };
  const GenreArray = Object.keys(GenreObject);

  return (
    <div>
      {GenreArray.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                <Link to={`/page/${GenreArray[group]}/1`}
                style={{"display":"flex", "flexDirection":"row", "alignContent":"center"}}>
                  <div className={styles.titleImg}></div>
                  <div><span>{group}</span></div>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home;