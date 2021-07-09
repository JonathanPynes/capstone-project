import styled from "styled-components";
import Overlay from "react-overlay-component";
import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
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

  const MyVantaComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          RINGS({
            el: myRef.current,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div ref={myRef}>
        <h1 className="Heading">Try Many Colors.</h1>
        <h1 className="Heading">Paint Once.</h1>
        <button className="Heading-start-button">Start</button>
      </div>
    );
  };

  return (
    <div className="App">
      <MyVantaComponent></MyVantaComponent>
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
            setOverlayUser({
              name: "Ron Michael",
              bio: "Writer of English, aspiring writer of code, fourth of my name",
            });
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
            setOverlayUser({
              name: "Kelsy",
              bio: "25 years old, loves the color purple and baby Yoda.",
            });
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
