
import { useEffect, useState } from "react";
import Navbar from './Navbar/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Information from "./Navbar/Information";
import Register from "./Navbar/Register";
import LazyHero from 'react-lazy-hero';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-carousel-minimal';

export default function Main() {

    const images = [
        {
          image: 'https://picsum.photos/id/1018/1000/600/',
        },
        {
          image: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          image: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return(
        <>
        
        <section className="hero">
            <div className="hero-inner">
                <h1 className="heading">Mina & Juan Pablo</h1>
                <nav className="navbar">
                    <ul className="nav_ul">
                        <li><a href="#our_story">Our Story</a></li>
                        <li><a href="#details">Details</a></li>
                        <li>RSVP</li>
                    </ul>
                </nav> 
                </div>
        </section>         
        <section id="our_story">
        <div id="our_story_inner">
            <h1>Vi ska gifta oss jaow</h1>
            Vi träffades i Barcelona hösten 2012. Juan-Pablo friade i Barcelona sensommaren 2021. Vi gifter oss (utanför) Barcelona våren 2023. Hoppas att ni vill komma och fira med oss!
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
            <h5 className="wedding_text">BRÖLLOPET</h5>

            <div id="wedding_info_container">
            <div id="wedding_info_upper">
                <h2 class="wedding_info_text" id="when">När</h2>
                <p class="wedding_info_text">Lördag 20 maj 2023</p>
                <p class="wedding_info_text">Vigseln startar 15:00</p>
                <p class="wedding_info_text">Därefter följer aperitivo och fest</p>
            </div>
            <div id="wedding_info_middle">
                <h2 class="wedding_info_text" id="where">Vart</h2>
                <p class="wedding_info_text">Can Tarranc</p>
                <p class="wedding_info_text">Tordera, Katalonien</p>
                <p class="wedding_info_text">Samtliga gäster transporteras med buss från Hotel YY. Avgång 14.00.</p>
            </div>
            </div>
        </section>

        <section id="register">

            <div id="btn_container">
          <h2 class="button_heading" id="wedding_text">Mina och Juan-Pablos bröllop</h2> 
            <button id="btn">Register Now</button>
        </div>
        </section>

        </>

        /*
        <div className="main_container">
            <header className="main_header">
                <h1>Mina & Juan-Pablos Bröllop</h1>
            </header>
            <Router>
                <Navbar />
                <Routes>
                <Route path='/information' element={<Information />} />
                <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
        hallo
        
        </div>
        */
    );
}