import styled from "styled-components";
import "./App.css";

function App() {
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
