import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "pages/Footer/Footer";
import { PATH } from "./routes/paths";
import Main from "pages/Main/Main";
import Navigation from "shared/Navigation/Navigation";
import Guitars from "pages/Guitars/Guitars";
import { Header } from "shared/components/Header/Header/Header";


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
