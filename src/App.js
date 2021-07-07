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
      <section className="The-team">
        <h2 className="Team-heading">Meet the Team</h2>
        <Name>Jon</Name>
        <Name>Mar</Name>
        <Name>Ron</Name>
        <Name>Kelsey</Name>
      </section>
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

const Mainheader = styled.header`
  background-color: #5c6bc0;
  height: 241px;
  width: auto;
  padding-left: 15px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.h1`
  color: #ffffff;
  font-size: 24px;
`;

const Headertwo = styled.h1`
  color: #ffffff;
  font-size: 24px;
`;

const Startbutton = styled.button`
  background-color: #ede7f6;
  border-radius: 30px;
  width: 72px;
  height: 25px;
  font-size: 12px;
`;

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

const Name = styled.h2`
  font-size: 36px;
`;

export default App;
