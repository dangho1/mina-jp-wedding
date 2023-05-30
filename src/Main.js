import { Link } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import our_story from "./assets/our_story.jpg";
import brollopet from "./assets/brollopet.jpg";
import dresscode from "./assets/dresscode.jpg";
import flight from "./assets/flight.jpg";
import otherinfo from "./assets/otherinfo.jpg";
import rsvp from "./assets/rsvp.jpg";
import schedule from "./assets/schedule.jpg";

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
        <h1 id="our_story_header">Vi ska gifta oss!</h1>
        <div
          className="h-100 w-100 d-flex align-items-center justify-content-center"
          id="our_story_inner"
        >
          <div className="our_story_text">
            Vi träffades i Barcelona hösten 2012. Juan-Pablo friade i Barcelona
            sensommaren 2021. Vi gifter oss (utanför) Barcelona våren 2023.
            Hoppas att ni vill komma och fira med oss!
          </div>
        </div>
      </section>

      <img src={our_story} className="img-fluid" />

      <section id="details">
        <h1 id="our_story_header">Bröllopet</h1>
        <div
          className="h-100 w-100 d-flex align-items-center justify-content-center"
          id="our_story_inner"
        >
          <div className="d-flex flex-column">
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">När</h3>
              Lördag 20 maj 2023
 <br></br>
              
Vigseln börjar kl. 16:00. <br></br>
Därefter följer aperitivo, bröllopsmiddag och fest (FEST!) 

            </div>

            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">Var</h3>
              Can Tarranc <br></br>
Tordera, Katalonien <br></br>
Samtliga gäster transporteras med buss från Hotel YY. 

            </div>
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">
                Kvällen innan
              </h3>
              För att fira in helgen och hälsa er alla välkomna bjuder vi in till en välkomstcocktail med drinkar och tapas på terrassen på Hotel YY fredagen den 19 maj, med start kl. 19.00. 
            </div>
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">
                Dagen efter
              </h3>
              Vi tycker att första dagen som gifta är värd att fira och hoppas att ni vill fira den med oss! Dagen efter bröllopet (söndag 21 maj) bjuder vi därför in till ett poolparty med grillbuffé på Can Tarranc. Festen pågår mellan kl. 12-16. Transport till festen avgår från Hotel YY. <br></br> <br></br>
              För mer information och specifika tider gällande transport, vänligen se <a href='/schedule'>schemat</a>

            </div>
          </div>

          
        </div>
      </section>
      
      <img src={brollopet} className="img-fluid" />

      <section id="flight_info">
        <h1 id="our_story_header">Flyg och Boende</h1>
        <div
          className="h-100 w-100 d-flex align-items-center justify-content-center"
          id="our_story_inner"
        >
          <div className="our_story_text" id="flight_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor elit ut felis gravida, quis iaculis eros efficitur. Nam
            feugiat eget eros sit amet laoreet. Nunc auctor, justo ac eleifend
            aliquet, velit libero semper nibh, eget pellentesque lacus lectus
            posuere orci. Curabitur nibh quam, scelerisque id dapibus id, mollis
            vel tellus. Aliquam mauris lectus, interdum ut vehicula non,
            placerat quis lectus. Duis ut metus mattis, blandit tortor rhoncus,
            mollis mi. Nullam ultricies libero non quam pulvinar pharetra. Proin
            turpis odio, laoreet a dapibus at, facilisis porta justo. Donec
            faucibus aliquet urna ut ultricies. Nulla facilisi.
          </div>
        </div>
      </section>

      <img src={flight} className="img-fluid" />

      <section id="dresscodes">
        <h1 id="our_story_header">Klädkoder</h1>
        <div
          className="h-100 w-100 d-flex align-items-center justify-content-center"
          id="our_story_inner"
        >
          <div className="d-flex flex-column">
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">19 maj (välkomstcocktail):</h3>
              Udda kavaj <br></br>
              Inspiration för den som önskar finns här: https://pin.it/4Gg6r3G
            </div>

            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">20 maj (bröllop):</h3>
              Mediterranean formal <br></br>
              Med detta menas följande, tänk en finare fest i
              medelhavsomgivning: <br></br>
              <br></br>
              <span className="dresscode_header">Herrar:</span> Kostym i valfri
              färg, och valfritt material, t.ex. linne eller bomull. Slips/fluga
              är valfritt för den som önskar. Kostymskor eller loafers.{" "}
              <br></br>
              <span className="dresscode_header">Damer:</span> Hel- eller
              vadlång klänning eller byxdräkt, gärna i finare material och i
              valfri färg (vi uppmuntrar färgglatt!). <br></br>
              <br></br>Inspiration för den som önskar finns här:
              https://pin.it/3BGbfBN <br></br>
            </div>
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">
                21 maj (grillning och poolparty):
              </h3>
              Pool party chic <br></br>
              Inspiration för den som önskar finns här: https://pin.it/4p6yi5q{" "}
              <br></br>
              Ta med/ha på dig badkläder!
            </div>
          </div>
        </div>
      </section>

      <img src={dresscode} className="img-fluid" />

      <section id="information">
        <h1 id="information_header">Övrig information</h1>
        <div
          className="h-100 w-100 d-flex align-items-center justify-content-center"
          id="information_inner"
        >
          <div className="d-flex flex-column">
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">Tal</h3>
              Vill du hålla tal, ge sina lyckönskningar eller framföra något
              under bröllopet? Vad roligt! Anmäl detta till vårt toastpar,
              Katarina Roa och Wictor Björklund, genom att maila MAIL.
            </div>

            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">Barn</h3>
              Vi önskar fira vår bröllopshelg med endast vuxna. Ammande barn är
              dock självklart välkomna.
            </div>
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">Mobilfri vigsel</h3>
              Vi vill be er att inte använda era mobiler eller fotografera/filma
              under vår vigsel. Efter vigseln är det dock fritt fram att fota
              och filma! Vi vill ha så många minnen som möjligt kvar efter
              helgen, så dela gärna era filmer och foton med oss efter
              bröllopet.
            </div>
            <div className="p-2" id="flight_text">
              <h3 className="dresscode_header">Presenter</h3>
              Allt vi önskar är att få fira med alla er nära och kära. Om ni
              ändå vill uppmärksamma oss med en gåva, blir vi glada för ett
              bidrag till vår bröllopsresa.
              <br></br> <br></br>
              Bidrag till bröllopsresan skickas med fördel genom Swish till Iara
              Laxèn (brudtärna) på 070-358 57 28, märkt med namn och
              “bröllopspresent”. Brudparet kommer därefter att få summan
              överförd som klumpsumma.
            </div>
          </div>
        </div>
      </section>

      <img src={otherinfo} className="img-fluid" />

      <section id="register">
        <h1 id="our_story_header">Mina & Juan-Pablos Bröllop</h1>
        <div
          className="h-100 w-100 d-flex align-items-center justify-content-center"
          id="register_inner"
        >
          <div className="our_story_text" id="flight_text">
          <Link to="/OSA">
            <button type="button" id="btn">
              OSA
            </button>
          </Link>
          </div>
        </div>
      </section>

      

      <img src={rsvp} className="img-fluid" />
    </>
  );
}
