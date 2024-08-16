import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Router from "next/router";

function FeaturedList() {
  const [featured, setFeatured] = useState([
    {
      Title: "Batman: O Cavaleiro das Trevas",
      Poster:
        "https://m.media-amazon.com/images/S/pv-target-images/ae8dddd0abc2fac14052f29bc2ae15ddd86374c0d3bd017171ee6473b8933b29.jpg",
      Type: "movie",
      Year: "2008",
      imdbID: "tt0468569",
    },
    {
      Poster:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
      Title: "Vingadores: Ultimato",
      Type: "movie",
      Year: "2019",
      imdbID: "tt4154796",
    },
    {
      Poster:
        "https://br.web.img3.acsta.net/medias/nmedia/18/91/25/21/20154443.jpg",
      Title: "Procurando Nemo",
      Type: "movie",
      Year: "2003",
      imdbID: "tt0266543",
    },
    {
      Poster:
        "https://br.web.img3.acsta.net/pictures/210/140/21014024_20130619225537406.jpg",
      Title: "Truque de Mestre",
      Type: "movie",
      Year: "2013",
      imdbID: "tt1670345",
    },
    {
      Poster:
        "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/90/19874370.jpg",
      Title: "A Rede Social",
      Type: "movie",
      Year: "2010",
      imdbID: "tt1285016",
    },
    {
      Poster:
        "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
      Title: "Matrix",
      Type: "movie",
      Year: "1999",
      imdbID: "tt0133093",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/I/61ooZHl+CTL._AC_UF1000,1000_QL80_.jpg",
      Title: "Eu, Robô",
      Type: "movie",
      Year: "2004",
      imdbID: "tt0343818",
    },
    {
      Poster:
        "https://f001.backblazeb2.com/file/papocine/2018/11/20181129-mr-robot-papo-de-cinema-cartaz-teaser.jpg",
      Title: "Mr Robot",
      Type: "series",
      Year: "2015–2019",
      imdbID: "tt4158110",
    },
    {
      Poster:
        "https://blog.insinis.com/wp-content/uploads/2023/04/BLACK-MIRROR-CAPA.jpg",
      Title: "Black Mirror",
      Type: "series",
      Year: "2011–...",
      imdbID: "tt2085059",
    },
  ]);
  const barRef = useRef(null);
  const scrollInterval = useRef(null);
  function scroll() {
    barRef.current.scrollLeft += 1;
  }
  useEffect(() => {
    scroll();
    scrollInterval.current = setInterval(scroll, 20);

    return () => clearInterval(scrollInterval.current);
  }, []);

  return (
    <div>
      <Card.Header
        as="h5"
        style={{ width: "80vw", alignItems: "center", margin: "1rem auto" }}
      >
        Destaques
      </Card.Header>
      <Card
        className={`${styles.thirteen} ${styles.widthChange} bgBlack mb-3`}
        style={{
          width: "80vw",
          alignItems: "center",
          margin: "auto",
          padding: "10px 0 0 0",
        }}
      >
        <div
          className={`${styles.grid} ${styles.scrolbar}`}
          style={{
            overflowX: "scroll",
            width: "fit-content",
            display: "flex",
          }}
          ref={barRef}
        >
          {featured.map((m, i) => (
            <Card.Body style={{ textAlign: "center" }} key={i}>
              <Image
                alt="movie"
                loader={() => {
                  return m.Poster;
                }}
                src={m.Poster}
                priority
                width={120}
                height={400}
                onClick={() => Router.push("movie/" + m.imdbID)}
                className={styles.image}
              />
              <Card.Title className={styles.movieName}>{m.Title}</Card.Title>
              <Card.Text className={styles.type}>{m.Type}</Card.Text>
              {/* <Card.Text>{m.Year}</Card.Text> */}
              {/* <Button
                variant="primary"
                onClick={() => Router.push("movie/" + m.imdbID)}
              >
                Details
              </Button> */}
            </Card.Body>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default FeaturedList;
