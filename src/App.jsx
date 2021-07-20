import styled from "styled-components";
import Overlay from "react-overlay-component";
import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import "./App.css";
import Kelsy from "../src/assets/kelsyProfilePic.jpeg";
import Mar from "../src/assets/marProfilePic.png";
import Ron from "../src/assets/ronProfilePic.jpeg";
import Jon from "../src/assets/jonProfilePic.jpg";
import Yellowpaintbackground from "../src/assets/yellowPaintBackground.svg";
import Splatter from "../src/assets/splatterBackground.svg";
import Rainbowbutton from "../src/assets/rainbowButton.GIF";
import Example from "../src/assets/Example_Cropped.gif";

function App() {
  const [isOpen, setOverlay] = useState(false);
  const [overlayUser, setOverlayUser] = useState({});
  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    clickDismiss: true,
    escapeDismiss: true,
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
          <a
            href="https://ronmichael461806.invisionapp.com/console/share/GE2TDD4I8U/700852821"
            target="_blank"
            rel="noreferrer"
          >
            <Startbutton>Start</Startbutton>
          </a>
        </Mainheader>
      </div>
    );
  };

  return (
    <div className="App">
      <MyVantaComponent></MyVantaComponent>
      <Mainhero>
        <Yellowpaintbackgroundcss>
          <ExampleGif>
            <Quotesection>
              <ul>
                <li>
                  <Quoteone>Visualize your new colors</Quoteone>
                </li>
                <li>
                  <Quotetwo></Quotetwo>
                </li>
                <li>
                  <Quotethree></Quotethree>
                </li>
                <li>
                  <a
                    href="https://ronmichael461806.invisionapp.com/console/share/GE2TDD4I8U/700852821"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Rainbowbuttoncss
                      src={Rainbowbutton}
                      alt="Rainbow start button"
                    ></Rainbowbuttoncss>
                  </a>
                </li>
              </ul>
            </Quotesection>
          </ExampleGif>
        </Yellowpaintbackgroundcss>
      </Mainhero>

      <Splatterbackgroundcss>
        <Meetteamheader></Meetteamheader>
        <Meetteam className="Overlay-section">
          <MeetTheTeamProfile
            src={Jon}
            alt=""
            className="primary"
            onClick={() => {
              setOverlay(true);
              setOverlayUser({
                name: "Jon Pynes",
                bio: "Grew up in Nebraska, loves to learn, wants to die on Mars - just not on impact",
                img: Jon,
              });
            }}
          />
          <MeetTheTeamProfile
            src={Ron}
            alt=""
            className="primary"
            onClick={() => {
              setOverlay(true);
              setOverlayUser({
                name: "Ron Michael",
                bio: "Writer of English, aspiring writer of code, fourth of my name",
                img: Ron,
              });
            }}
          />
          <MeetTheTeamProfile
            src={Mar}
            alt=""
            className="primary"
            onClick={() => {
              setOverlay(true);
              setOverlayUser({
                name: "Mar",
                bio: "A bio about Mar",
                img: Mar,
              });
            }}
          />
          <MeetTheTeamProfile
            src={Kelsy}
            alt=""
            className="primary"
            onClick={() => {
              setOverlay(true);
              setOverlayUser({
                name: "Kelsy",
                bio: "25 years old, loves the color purple and baby Yoda.",
                img: Kelsy,
              });
            }}
          />

          <Overlay
            configs={configs}
            isOpen={isOpen}
            closeOverlay={closeOverlay}
          >
            <MeetTheTeamOverlayStyle>
              <MeetTheTeamProfileOverlay src={overlayUser.img} alt="yay" />
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
            </MeetTheTeamOverlayStyle>
          </Overlay>
        </Meetteam>

        <Ourstory>
          <Storyheader>Our Story</Storyheader>
          <ul>
            <li>
              <Storytext>
                We’ve all spent a lot more time staring at the same four walls
                lately. It’s time to liven up your living space, but a mountain
                of paint swatches and some tough decisions lie in your way.
                Don’t know where to start? Afraid of picking the wrong color?{" "}
                <br></br>
                Paint Once is here to help you choose a color palette and see
                your new room before you even touch a paint can. Whether you’ve
                just bought a new home, you’re getting ready to sell your home,
                or you just want to freshen your space up, Paint Once is the
                only tool you need to design and visualize your room’s new look.{" "}
                <br></br>
                Today,
                <br></br>Try many colors,
                <br></br>Paint once.
              </Storytext>
            </li>
          </ul>
        </Ourstory>
      </Splatterbackgroundcss>
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
  font-family: "Noto Sans", sans-serif;
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
  font-family: "Noto Sans", sans-serif;
`;

//Header end
//Video and Quotes start

const Mainhero = styled.section`
  height: 850px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans", sans-serif;
`;
const ExampleGif = styled.div`
  background-image: url(${Example});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;
const Quotesection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  font-weight: 700;
  text-align: center;
`;

const Quoteone = styled.p`
  margin: 15px;
  padding: 30px;
  margin-top: 3rem;
  font-size: 30px;
  text-align: center;
`;

const Quotetwo = styled.p`
  margin: 15px;
  margin-top: 35px;
  padding: 30px;
  font-size: 20px;
`;

const Quotethree = styled.p`
  margin: 15px;
  margin-top: 35px;
  padding: 30px;
  font-size: 20px;
`;

const Rainbowbuttoncss = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  margin-right: 1.3rem;
  margin-top: 19rem;
`;

//Video and Quotes end
//Meet the team section start

const MeetTheTeamProfile = styled.img`
height: 7rem;
width: 7rem;
border-radius: 50%;
background-position: center
object-fit: cover;
margin: 2rem;
`;

const MeetTheTeamProfileOverlay = styled.img`
height: 16rem;
width: 16rem;
border-radius: 50%;
background-position: center
object-fit: cover;
margin: 1rem;
`;

const MeetTheTeamOverlayStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Meetteam = styled.section`
  margin-top: 15rem;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
`;

const Meetteamheader = styled.h1`
  margin-top: 20rem  
  font-size: 36px;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
`;

const Splatterbackgroundcss = styled.div`
  background-image: url(${Splatter});
  background-position: top center;
  background-repeat: repeat;
`;
const Yellowpaintbackgroundcss = styled.div`
  background-image: url(${Yellowpaintbackground});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

//Meet the team section end
//Our story section start

const Ourstory = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans", sans-serif;
`;

const Storyheader = styled.h2`
  font-size: 36px;
  display: flex;
`;

const Storytext = styled.p`
  font-size: 18px;
  margin: 35px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 700;
`;

//Our story section end

export default App;
