import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Main from "./Main";
import Home from "./Home";
import './index.css';

const AboutUs = React.lazy(() => import("./app/pusb/pusb-about/pages/AboutPage"));
const Structure = React.lazy(() => import("./app/pusb/pusb-structure/page"));
const Events = React.lazy(() => import("./app/pusb/pusb-event/page"));
const CnC = React.lazy(() => import("./app/pusb/pusb-cnc/page"));
const SOP = React.lazy(() => import("./app/pusb/pusb-sop/page"));
const News = React.lazy(() => import("./app/pusb/pusb-news/page"));
const ContactUs = React.lazy(() => import("./app/pusb/pusb-contact/page"));

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Splash Screen → Home */}
            <Route path="/" element={<Home />} />

            {/* Other pages */}
            <Route path="/pusb/pusb-about" element={<AboutUs />} />
            <Route path="/pusb/pusb-structure" element={<Structure />} />
            <Route path="/pusb/pusb-event" element={<Events />} />
            <Route path="/pusb/pusb-cnc" element={<CnC />} />
            <Route path="/pusb/pusb-sop" element={<SOP />} />
            <Route path="/pusb/pusb-news" element={<News />} />
            <Route path="/pusb/pusb-contact" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </Main>
    </BrowserRouter>
  );
}

export default App;
