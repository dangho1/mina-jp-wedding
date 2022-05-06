import React from 'react';
import { useState } from 'react';
  
function RSVP() {

    const [firstName, setFirstName] = useState("");
    const [surName, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [passCode, setPassCode] = useState("");

    function submitRSVP(e){
        e.preventDefault();
        const email = document.getElementById('email');
        if(!email.checkValidity() ) {
            alert("Email är i fel format");
            return;
        }
        if(firstName=="")
        {
            alert("Fältet för förnamn är tomt");
            return;
        }
        if(surName=="")
        {
            alert("Fältet för efternamn är tomt");
            return;
        }if(email=="")
        {
            alert("Fältet för email är tomt");
            return;
        }if(passCode !="GholiofRoa")
        {
            alert("Fel kod :(");
            return;
        }

        
    }
    return (
      <>
    <section className="hero">
        <div className="hero-inner">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            
          </a>
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
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="/#our_story">
                Our Story
              </a>
              <a class="nav-item nav-link" href="/#details">
                Details
              </a>
              <a class="nav-item nav-link disabled" href="#">
                Disabled
              </a>
            </div>
          </div>
        </nav>
          <div className="header-content">
            <h1 className="heading">Mina & Juan Pablo</h1>
          </div>
        </div>
      </section>
      <form>
      <div class="form-group">
    <label for="firstname">Förnamn</label>
    <input required="required" type="text" class="form-control" id="firstname" placeholder="Förnamn" value={firstName} onChange={e => setFirstName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="surname">efternamn</label>
    <input required="required" type="text" class="form-control" id="surname" placeholder="Efternamn" value={surName} onChange={e => setSurName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input required="required" type="email" class="form-control" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Kod</label>
    <input required="required" type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" value={passCode} onChange={e => setPassCode(e.target.value)} />
    <small>Står på inbjudan :)</small>
  </div>
  <button type="submit" class="btn btn-primary" onClick={submitRSVP}>Anmäl</button>
</form>
        
      
      
      </>
  );
};
  
export default RSVP;