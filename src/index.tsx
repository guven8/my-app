import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { NewsFeed } from "./components/NewsFeed";

const App = styled.div`
  * {
    box-sizing: border-box;
  }

  html {
    --header-height: 40px;
    --base-spacing: 20px;
  }

  body {
    font-weight: 300;
    margin: 0;
    min-height: 100vh;
  }

  html,
  body,
  pre,
  code,
  kbd,
  samp {
    font-family: "Press Start 2P", cursive, "Roboto", "Segoe UI";
  }

  .content {
    padding: 80px 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
  }
`;

function AppContainer() {
  return (
    <App>
      <Header />
      <div className="content">
        <NewsFeed />
      </div>
    </App>
  );
}

ReactDOM.render(<AppContainer />, document.querySelector(".app"));
