import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserFeedBackPage from './Pages/userFeedBackPage';
import ThankYouPage from './Pages/ThankYouPage';
import ButtonPage from './Pages/ButtonPage';
import DishFeedBackPage from './Pages/DishFeedBackPage';
import MenuPage from './Pages/MenuPage';
import GetQuotePage from './Pages/GetQuotePage';
import ThankyouCatering from './Pages/ThankyouCatering';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/feedback/:eventId" element={<UserFeedBackPage />} />
          <Route path="/dishFeedback/:eventId" element={<DishFeedBackPage />} />
          <Route path="/button/:eventId" element={<ButtonPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/thankyouQuote" element={<ThankyouCatering/>} />
          <Route path="/" element={<MenuPage />} />
          <Route path="/quote" element={<GetQuotePage />} />
          <Route path="*" element={<h1 style={{ marginTop: "5rem" }}>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
