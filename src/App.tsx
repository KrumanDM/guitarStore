import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Guitars from "./Guitars/Guitars";
import { Header } from "./Header/Header";
import Main from "./Main/Main";
import Navigation from "./Navigation/Navigation";
import { PATH } from "./routes/paths";

const App = () => {
  return (
    <HashRouter basename={PATH.BASE}>
      <Routes>
        <Route
          path={PATH.BASE}
          element={
            <div>
              <Header />
              <Main />
              <Navigation />
              <Footer />
            </div>
          }
        />
        <Route path={PATH.GUITARS} element={<Guitars />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
