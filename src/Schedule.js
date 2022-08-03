import React from "react";
import { useState } from "react";

function Schedule() {
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
              <a class="nav-item nav-link" href="/#our_story">
                Our Story
              </a>
              <a class="nav-item nav-link" href="/#details">
                Details
              </a>
              <a class="nav-item nav-link" href="#">
                RSVP
              </a>
            </div>
          </div>
        </nav>
        <div className="header-content">
          <h1 className="heading">Mina & Juan Pablo</h1>
      </div>
    </section>
    <section className="schedule-page">

    </section>
    </>
  );
}

export default Schedule;