import styled from "styled-components";
import Overlay from "react-overlay-component";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setOverlay] = useState(false);
  const [overlayUser, setOverlayUser] = useState({});
  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    clickDismiss: true,
    escapeDismiss: false,
    focusOutline: false,
  };

  return (
    <div className="App">
      <header className="Main-header">
        <h1 className="Heading">Try Many Colors.</h1>
        <h1 className="Heading">Paint Once.</h1>
        <button className="Heading-start-button">Start</button>
      </header>
      <section className="Main-hero">
        <h3>Video here</h3>
        <ul>
          <li>
            <p className="Quote-blocks">
              Paint once is a great app that gets you lots of kicks with the
              cool kids
            </p>
          </li>
          <li>
            <p className="Quote-blocks">
              Paint once is a great app that gets you lots of kicks with the
              cool kids
            </p>
          </li>
          <li>
            <p className="Quote-blocks">
              Paint once is a great app that gets you lots of kicks with the
              cool kids
            </p>
          </li>
        </ul>
      </section>
      <section className="The-team">
        <h2 className="Team-heading">Meet the Team</h2>
        <h2 className="Team-names">Jon Mar</h2>
        <h2 className="Team-names">Ron Kelsy</h2>
      </section>
      <div className="Overlay-section">
        {/* replace buttons with img tags  */}
        <button
          className="primary"
          onClick={() => {
            setOverlay(true);
            setOverlayUser({
              name: "Jon Pynes",
              bio: "Grew up in Nebraska, loves to learn, wants to die on Mars - just not on impact",
            });
          }}
        >
          Jon Pynes
        </button>
        <button
          className="primary"
          onClick={() => {
            setOverlay(true);
            setOverlayUser({ name: "Ron Michael", bio: "A bio about Ron" });
          }}
        >
          Ron Michael
        </button>
        <button
          className="primary"
          onClick={() => {
            setOverlay(true);
            setOverlayUser({ name: "Mar", bio: "A bio about Mar" });
          }}
        >
          Mar Lastname
        </button>
        <button
          className="primary"
          onClick={() => {
            setOverlay(true);
            setOverlayUser({ name: "Kelsy", bio: "A bio about Kelsy" });
          }}
        >
          Kelsy Foulker
        </button>

        <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
          <img src="" alt="" />
          <h2>{overlayUser.name}</h2>
          <p>{overlayUser.bio}</p>

          <button
            className="danger"
            onClick={() => {
              setOverlay(false);
            }}
          >
            Back
          </button>
        </Overlay>
      </div>

      <section className="Our-story">
        <h2 className="Story-heading">Our Story</h2>
        <ul>
          <li>
            <p className="Story-text">
              Painting is life. That’s what Grandpa Eddy would say watching it
              dry.
            </p>
          </li>
          <li>
            <p className="Story-text">
              “If you want to see the color, you have to put in the paint.”
            </p>
          </li>
          <li>
            <p className="Story-text">Today, try many colors, paint once.</p>
          </li>
        </ul>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
