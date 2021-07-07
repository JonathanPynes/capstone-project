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
      </Mainhero>
      <section className="The-team">
        <h2 className="Team-heading">Meet the Team</h2>
        <h2 className="Team-names">Jon Mar</h2>
        <h2 className="Team-names">Ron Kelsy</h2>
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

const Video = styled.h3`
height: 356px
  width: auto;
  background-color: #ede7f6;
`;

const Mainhero = styled.section`
  background-color: #8e99f3;
`;

export default App;
