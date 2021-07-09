import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mainheader>
        <Header>Try Many Colors.</Header>
        <Headertwo>Paint Once.</Headertwo>
        <Startbutton>Start</Startbutton>
      </Mainheader>
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
      <Meetteam>
        <Name>Jon</Name>
        <Name>Mar</Name>
        <Name>Ron</Name>
        <Name>Kelsy</Name>
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
  background-color: #5c6bc0;
  height: 241px;
  width: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header = styled.h1`
  color: #ffffff;
  font-size: 24px;
  text-align: right;
`;

const Headertwo = styled.h1`
  color: #ffffff;
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

const Name = styled.h2`
  font-size: 36px;
  margin: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
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
