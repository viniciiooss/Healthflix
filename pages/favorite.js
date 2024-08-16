import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Router from "next/router";

function FavoriteList(props) {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    // Atualiza os dados favoritos quando props.favoriteData muda
    setFavoriteData(props.favoriteData);
  }, [props.favoriteData]);

  const remove = (obj) => {
    const objId = obj.imdb;
    const updatedFavorites = favoriteData.filter((data) => data.imdb !== objId);
    setFavoriteData(updatedFavorites);
    localStorage.setItem("favs", JSON.stringify(updatedFavorites));
    console.log("remove", updatedFavorites);
    console.log("update", JSON.parse(localStorage.getItem("favs")));
  };

  return (
    <div id="DynamicFavData" style={{ display: favoriteData.length ? "block" : "none" }}>
      <Card.Header
        as="h5"
        style={{ width: "80vw", alignItems: "center", margin: "1rem auto" }}
        id="scrolltofav"
      >
        {favoriteData.length} Favoritos
      </Card.Header>
      <Card
        className={`${styles.thirteen} ${styles.widthChange} bgBlack mb-3`}
        id="favorites"
        style={{
          width: "80vw",
          alignItems: "center",
          margin: "auto",
          padding: "10px 0 0 0",
        }}
      >
        <div
          className={`${styles.grid} ${styles.scrolbar} `}
          style={{
            overflowX: "scroll",
            width: "fit-content",
            display: "flex",
          }}
        >
          {favoriteData.map((obj) => (
            <Card.Body style={{ textAlign: "center" }} key={obj.imdb}>
              <Image
                alt="movie"
                loader={() => obj.poster}
                src={obj.poster}
                priority
                width={120}
                height={400}
                className={styles.image}
                onClick={() => Router.push("movie/" + obj.imdb)}
              />
              <Card.Title className={styles.movieName}>
                {obj.title}
              </Card.Title>
              <Button variant="secondary" onClick={() => remove(obj)}>
                Remover
              </Button>
            </Card.Body>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default FavoriteList;
