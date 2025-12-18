import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TheVibe from './components/TheVibe';
import EventDetails from './components/EventDetails';
import Hosts from './components/Hosts';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import MarioShop from './components/MarioShop';
import CesarShop from './components/CesarShop';
import Countdown from './components/Countdown';

const HomePage: React.FC = () => (
  <>
    <div className="pt-16">
      <Countdown />
      <Hero />
      <TheVibe />
      <EventDetails />
      <Hosts />
      <RSVP />
      <Gifts />
    </div>
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="font-sans text-slate-800 antialiased selection:bg-party-200 selection:text-party-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mecanica-mario" element={<MarioShop />} />
            <Route path="/loja-cesar" element={<CesarShop />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;