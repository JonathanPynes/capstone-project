import styled from "styled-components";
import Overlay from "react-overlay-component";
import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
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
          FOG({
            el: myRef.current,
            lowlightColor: 0x242a4b,
            highlightColor: 0xffbb00,
            midtoneColor: 0x861596,
            zoom: 0.3,
            blur: 0.32,
            speed: 1,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 250.0,
            minWidth: 200.0,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div ref={myRef}>
        <Mainheader>
          <Header>Try Many Colors.</Header>
          <Headertwo>Paint Once.</Headertwo>
          <Startbutton>Start</Startbutton>
        </Mainheader>
      </div>
    );
  };

  return (
    <div className="App">
      <MyVantaComponent></MyVantaComponent>
      <Mainhero>
        <Video>Video here</Video>
        <Quotesection>
          <ul>
            <li>
              <Quoteone>
                Paint once is a great app that gets you lots of kicks with the
                cool kids
              </Quoteone>
            </li>
            <li>
              <Quotetwo>
                Paint once is a great app that gets you lots of kicks with the
                cool kids
              </Quotetwo>
            </li>
            <li>
              <Quotethree>
                Paint once is a great app that gets you lots of kicks with the
                cool kids
              </Quotethree>
            </li>
          </ul>
        </Quotesection>
      </Mainhero>

      <Meetteamheader>Meet the Team</Meetteamheader>
      <Meetteam className="Overlay-section">
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
      </Meetteam>

      <Ourstory>
        <Storyheader>Our Story</Storyheader>
        <ul>
          <li>
            <Storytext>
              Painting is life. That’s what Grandpa Eddy would say watching it
              dry. “If you want to see the color, you have to put in the paint.”{" "}
              <br></br>
              Today,
              <br></br>try many colors,
              <br></br>paint once.
            </Storytext>
          </li>
        </ul>
      </Ourstory>
      <footer></footer>
    </div>
  );
}

// Header start

const Mainheader = styled.header`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header = styled.h1`
  color: #000000;
  font-size: 24px;
  text-align: right;
`;

const Headertwo = styled.h1`
  color: #000000;
  font-size: 24px;
  text-align: right;
`;

const Startbutton = styled.button`
  background-color: #ede7f6;
  border-radius: 30px;
  width: 72px;
  height: 25px;
  font-size: 12px;
`;

//Header end
//Video and Quotes start

const Mainhero = styled.section`
  background-color: #8e99f3;
  height: 970px;
  display: flex;
  flex-direction: column;
`;

const Video = styled.h3`
height: 356px
  width: auto;
  height: 356px;
  background-color: #ede7f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quotesection = styled.section`
  display: flex;
  margin-top: 60px;
`;

const Quoteone = styled.p`
  margin: 15px;
  padding: 30px;
  font-size: 18px;
  display: flex;
`;

const Quotetwo = styled.p`
  margin: 15px;
  margin-top: 35px;
  padding: 30px;
  font-size: 18px;
  display: flex;
`;

const Quotethree = styled.p`
  margin: 15px;
  margin-top: 35px;
  padding: 30px;
  font-size: 18px;
  display: flex;
`;

//Video and Quotes end
//Meet the team section start

const Meetteam = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
`;

const Meetteamheader = styled.h1`
  font-size: 36px;
  display: flex;
  justify-content: center;
`;

//Meet the team section end
//Our story section start

const Ourstory = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Storyheader = styled.h2`
  font-size: 36px;
  display: flex;
`;

const Storytext = styled.p`
  font-size: 18;
  margin: 35px;
  margin-bottom: 50px;
  text-align: center;
`;

//Our story section end

export default App;
