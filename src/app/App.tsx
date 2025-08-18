import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "pages/Footer/Footer";
import { PATH } from "./routes/paths";
import Main from "pages/Main/Main";
import Guitars from "pages/Guitars/Guitars";
import { Header } from "shared/components/Header/Header/Header";
import Profile from "pages/Profile/Profile";
import Busket from "pages/Busket/Busket";


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
              <Footer />
            </div>
          }
        />
        <Route path={PATH.GUITARS} element={<Guitars />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.BUSKET} element={<Busket />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
