import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.module.scss";
import CoinPage from "@pages/CoinPage/CoinPage";
import MainPage from "@pages/MainPage/MainPage";
import styles from "./App.module.scss";
import classNames from "classnames";

function App() {
  const location = useLocation();
  const mainClass = classNames(
    styles.wrapper,
    location.pathname === "/" ? styles.wrapper__color : null
  );
  return (
    <main className={mainClass}>
      <div className={styles.container}>
        <header>
          <Link to="/">MainPage</Link>
          <Link to="/coin">CoinPage</Link>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/coin" element={<CoinPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
