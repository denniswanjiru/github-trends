import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { PageWrapper } from "./styles";
import Developers from './pages/Developers';
import Repos from './pages/Repos';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('REPO');

  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab('REPO')
    } else {
      setActiveTab('DEV')
    }
  }, [pathname])

  return (
    <div>
      <HeroSection />
      <PageWrapper>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route exact path="/developers" element={<Developers />} />
          <Route exact path="/" element={<Repos />} />
        </Routes>
      </PageWrapper>
    </div>
  );
}

export default App;
