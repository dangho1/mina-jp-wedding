import React from "react";
import { useState } from "react";

function RSVP() {
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const CLIENT_EMAIL = "editor@mina-jp-wedding-testing.iam.gserviceaccount.com";
  const PRIVATE_KEY =
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3IyitaegQdEpA\nCVU99dUjDCGQfHq/cuNnH43QQvz6WyHYu/PxE8LehSsmXnxLawB6Ia9NeJTFYn37\nD9N7itQak2hG9/enbKlgH+riwmIxXY2FMCmDqklmgnjY6J0e88aGNtYCYtl5zbKV\n269LgCw7iqNYjHSYnUqsKHNtB8FBQABSxLciyPQBuXV4U7m9ZVJv6zmlZVhcvySj\nDIL5ZkahPuAR89S4pc9t5VC4DIfwZT9B9To+wDXr8uAcxGVvq2VpLZcZ6SPefhv4\nczDtt7aat4h/Y/CjIZ/HC2W9NfGOQmJKL8PgNOyLK3/sjPEta6b40xr2mhR59PWd\nwC5FsLovAgMBAAECggEAHtW+IxiaWK7j041eu1x5YvnHavbyieqTrEjNTVwCETsn\n40CeLaCYpnPAlKjC/8XH4khqpj4fum4/bPa4smvpE4JvQ8e7fIaYrBUjrMNy2gH4\n8oxt6PvSeP6Nz2O3FL+R1QZFmUhAerguEfpXtPwjNnE82ItplEqjiIIVES4FlXEi\ncKIV7A9NVT0cHL6XOdhiJiUc93p1wWz+a5XQgrm0V1NNnHL3ACb+w5CRncpSFyIa\nLegK2rZBGfp/jJrp9l+H7+rYgHdgkqz88xkMtkQSVrSG+wzmAtwOQQwi1h/cP1mD\npdWvv8W6VbQyigYVXJwdRRv/H6wL7FRSeAn51SUkYQKBgQDv5on3rph26X9uBlpo\nb+7BY1ONeUKnbVjoKxEXvLEVM+8TpqejlsysnbKP7/EoMGnQuKthaH2CdtKFAJ2y\nkIa9Nwg2LevFDKgI6GtqTw6s0nuSPD0q3wMhB4K9Chfpz73C69QUFNgfA8KveA3p\nvPcuwxgWc0F7iB1+6JptY3A2IQKBgQDDbW9vBx8FhWU7GnKDz3YsHfmJ/DHJ9X7D\nG5sjBr1boIW0gXajLja/8fs1SJb8d31JTNX4AA2CAFvRF0qoN1l/1ELDYwgTheDN\nMaWq6WR06cXbtUlWy2/pqa6X92nWz4R+t9ghHZVudQLYRLCZMz4OjVPRm8KVkm0V\nvx/u6ONGTwKBgCRivwJGBPHkMGOrqwK0F25VdlK61ZU3TIjKH2mOQP2KRvSgDkUN\nljWIJZEXP2htD1+M4tF/W6nyA7QQh9qReR4xvpkZFe1pIgNX3RLesscblYp0gIKE\nGKFl1jp90WqxC4MI6b2x+6WYmGqsts+AzazWAk1FZeUqm+6nsORudJKBAoGBAMNl\nCcOjBRtKErsTaGft6COYHMYgB8/7yzBcy7IrrOyOBOFDiFEDhe5IjXjrCTuIZRYC\n4vTBaMAQh7z5YsXqAWxT2CTvQUXz156SAyhtjuluS0uvaJKFeXHRHCYJVCNY/QqN\n2mTR5XS5PYzqsP+cQnHeUG4FJHrUGolhvRXseED1AoGACuagTpmfbZk8AgokLd2X\nNUCrLwZnCFhXbF0Y1HxF+VpWcBtAwpylba/DP3rujw3nfvGmBr6X7etuiJX3OjeS\niwofTrvirAqSwzryOBfW7MbePOfHY2r4ZKu4rpx2OodFCinkEp7PRjiJpApGAkXm\n9znuFnP+/iVTSiXpfjIcq10=\n-----END PRIVATE KEY-----\n";
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [song, setSong] = useState("");
  const [allergies, setAllergies] = useState("");
  const [needAccomodation, setNeedAccomodation] = useState("");
  const [needTransportWeddingDay, setNeedTransportWeddingDay] = useState("");
  const [needTransportPoolParty, setNeedTransportPoolParty] = useState("");
  const [passCode, setPassCode] = useState("");

  function checkRSVP(e) {
    e.preventDefault();
    const email = document.getElementById("email");
    if (!email.checkValidity()) {
      alert("Email är i fel format");
      return;
    }
    if (firstName == "") {
      alert("Fältet för förnamn är tomt");
      return;
    }
    if (surName == "") {
      alert("Fältet för efternamn är tomt");
      return;
    }
    if (email == "") {
      alert("Fältet för email är tomt");
      return;
    }
    if (passCode != "GholiofRoa") {
      alert("Fel kod :(");
      return;
    }

    if(needAccomodation == "") {
      alert("Fyll i om du vill ha boende mellan 20-21 maj")
      return;
    }

    if(needTransportWeddingDay == "") {
      alert("Fyll i om du vill ha transport på bröllopsdagen");
      return;
    }

    if(needTransportPoolParty == "") {
      alert("Fyll i om du vill ha transport till och från poolpartyt");
      return;
    }

    submitRSVP();
  }

  async function submitRSVP() {
    const doc = new GoogleSpreadsheet(
      "1CsxH9fSPNTSDoTclRgbYhVR-x3uv-jEiE3eokPI88cQ"
    );
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
    } catch (e) {
      console.log(e);
    }
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Förnamn: firstName,
      Efternamn: surName,
      email: email,
      song: song,
      allergies: allergies,
      needAccomodation: needAccomodation,
      needTransportWeddingDay: needTransportWeddingDay,
      needTransportPoolParty: needTransportPoolParty
    });
    alert("Tack! Din anmälan är registrerad :)");
  }
  return (
    <>
    <div className="RSVP-page">
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
                OSA
              </a>
            </div>
          </div>
        </nav>
        <div className="header-content">
          <h1 className="heading">Mina & Juan Pablo</h1>
        </div>
      </section>
      <section className="form-section">
      <form className="form">
        <div class="form-group">
          <label for="firstname">Förnamn</label>
          <input
            required="required"
            type="text"
            class="form-control"
            id="firstname"
            placeholder="Förnamn"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="surname">Efternamn</label>
          <input
            required="required"
            type="text"
            class="form-control"
            id="surname"
            placeholder="Efternamn"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            required="required"
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="song">Låt du vill höra på dansgolvet</label>
          <input
            type="text"
            class="form-control"
            id="song"
            placeholder="Dancing Queen"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="allergies">Kostpreferenser eller allergier</label>
          <input
            type="text"
            class="form-control"
            id="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>
        <label>Jag önskar boende 20-21 maj</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={(e) => setNeedAccomodation("Yes")}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Ja
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={(e) => setNeedAccomodation("No")}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Nej
          </label>
        </div>

        <label>Jag önskar transport till och från festlokalen på bröllopsdagen</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={(e) => setNeedTransportWeddingDay("Yes")}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Ja
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={(e) => setNeedTransportWeddingDay("No")}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Nej
          </label>
        </div>

        <label>Jag önskar transport till och från festlokalen för poolpartyt dagen efter bröllopet</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={(e) => setNeedTransportPoolParty("Yes")}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Ja
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={(e) => setNeedTransportPoolParty("No")}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Nej
          </label>
        </div>
      
        <div class="form-group">
          <label for="exampleInputPassword1">Kod</label>
          <input
            required="required"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passCode}
            onChange={(e) => setPassCode(e.target.value)}
          />
          <small>Står på inbjudan :)</small>
        </div>
        <button type="submit" class="btn btn-primary" onClick={checkRSVP}>
          Anmäl
        </button>
      </form>
      </section>
      </div>
    </>
  );
}

export default RSVP;
