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
          <Startbutton>Start</Startbutton>
        </Mainheader>
      </div>
    );
  };

  return (
    <div className="App">
      <MyVantaComponent></MyVantaComponent>
      <Mainhero>
        <Yellowpaintbackgroundcss>
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
        </Yellowpaintbackgroundcss>
      </Mainhero>

      <Splattercss>
        <Meetteamheader>Meet the Team</Meetteamheader>
        <Meetteam className="Overlay-section">
          <MeetTheTeamProfile
            src={Jon}
            alt="Jon's picture"
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
            alt="Ron's picture"
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
            alt="Mar's picture"
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
            alt="Kelsy's picture"
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
                Painting is life. That’s what Grandpa Eddy would say watching it
                dry. “If you want to see the color, you have to put in the
                paint.” <br></br>
                Today,
                <br></br>try many colors,
                <br></br>paint once.
              </Storytext>
            </li>
          </ul>
        </Ourstory>
      </Splattercss>
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
  height: 970px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans", sans-serif;
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
  font-weight: 700;
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
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
`;

const Meetteamheader = styled.h1`
  font-size: 36px;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
`;

const Yellowpaintbackgroundcss = styled.div`
  background-image: url(${Yellowpaintbackground});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;s
`;

const Splattercss = styled.section`
  background-image: url(${Splatter});
  background-position: top center;
  background-repeat: repeat;
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
  font-size: 18;
  margin: 35px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 700;
`;

//Our story section end

export default App;
