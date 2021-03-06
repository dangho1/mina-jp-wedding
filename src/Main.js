import { Link } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";

export default function Main() {
  const images = [
    {
      image: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      image: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      image: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <section className="hero">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link" href="/">
                  Home <span class="sr-only"></span>
                </a>
                <a class="nav-item nav-link" href="#our_story">
                  Our Story
                </a>
                <a class="nav-item nav-link" href="#details">
                  Details
                </a>
                <a class="nav-item nav-link" href="/RSVP">
                  RSVP
                </a>
              </div>
            </div>
          </nav>
          <div className="header-content">
            <h1 className="heading">Mina & Juan Pablo</h1>
          </div>
      </section>
      <section id="our_story">
        <div id="our_story_inner">
          <h1 id="our_story_header">Vi ska gifta oss!</h1>
          <div className="our_story_text">
            Vi tr??ffades i Barcelona h??sten 2012. Juan-Pablo friade i Barcelona
            sensommaren 2021. Vi gifter oss (utanf??r) Barcelona v??ren 2023.
            Hoppas att ni vill komma och fira med oss!
          </div>
        </div>
      </section>
      <Carousel
        data={images}
        time={2000}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "500px",
        }}
      />
      <section id="details">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="wedding_text">BR??LLOPET</h5>
            </div>
            <div className="col">
              <div id="wedding_info_upper">
                <h2 class="wedding_info_text" id="when">
                  N??r
                </h2>
                <p class="wedding_info_text">L??rdag 20 maj 2023</p>
                <p class="wedding_info_text">Vigseln startar 15:00</p>
                <p class="wedding_info_text">
                  D??refter f??ljer aperitivo och fest
                </p>
                <div id="wedding_info_middle">
                  <h2 class="wedding_info_text" id="where">
                    Vart
                  </h2>
                  <p class="wedding_info_text">Can Tarranc</p>
                  <p class="wedding_info_text">Tordera, Katalonien</p>
                  <p class="wedding_info_text">
                    Samtliga g??ster transporteras med buss fr??n Hotel YY. Avg??ng
                    14.00.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register">
        <div id="btn_container">
          <h2 class="button_heading" id="wedding_text">
            Mina & Juan-Pablos br??llop
          </h2>
          <Link to="/RSVP">
            <button type="button" id="btn">
              RSVP
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
