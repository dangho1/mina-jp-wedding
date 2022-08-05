import { Link } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import our_story from './assets/our_story.jpg';

export default function Main() {

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
              <a class="nav-item nav-link" href="/OSA">
                OSA
              </a>
              <a class="nav-item nav-link" href="/schedule">
                Schedule
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
            Vi träffades i Barcelona hösten 2012. Juan-Pablo friade i Barcelona
            sensommaren 2021. Vi gifter oss (utanför) Barcelona våren 2023.
            Hoppas att ni vill komma och fira med oss!
          </div>
        </div>
      </section>

      <img src={our_story} className="full_width_img"/>

      <section id="details">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="wedding_text">BRÖLLOPET</h5>
            </div>
            <div className="col">
              <div id="wedding_info_upper">
                <h2 class="wedding_info_text" id="when">
                  När
                </h2>
                <p class="wedding_info_text">Lördag 20 maj 2023</p>
                <p class="wedding_info_text">Vigseln startar 15:00</p>
                <p class="wedding_info_text">
                  Därefter följer aperitivo och fest
                </p>
                <div id="wedding_info_middle">
                  <h2 class="wedding_info_text" id="where">
                    Vart
                  </h2>
                  <p class="wedding_info_text">Can Tarranc</p>
                  <p class="wedding_info_text">Tordera, Katalonien</p>
                  <p class="wedding_info_text">
                    Samtliga gäster transporteras med buss från Hotel YY. Avgång
                    14.00.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
                <Link to="/schedule">
                  <button type="button" id="btn" className="schedule_btn">
                    Schema
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="flight_info">
        <div class="container">
          <div class="row">
            <div class="col">
              Flyg och boende...
            </div>
          </div>
        </div>
      </section>
      <section id="register">
        <div id="btn_container">
          <h2 className="button_heading" id="wedding_text">
            Mina & Juan-Pablos bröllop
          </h2>
          <Link to="/OSA">
            <button type="button" id="btn">
              OSA
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
