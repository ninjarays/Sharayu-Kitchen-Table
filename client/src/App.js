import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserFeedBackPage from './Pages/userFeedBackPage';
import ThankYouPage from './Pages/ThankYouPage';
import ButtonPage from './Pages/ButtonPage';
import DishFeedBackPage from './Pages/DishFeedBackPage';
import MenuPage from './Pages/MenuPage';
import { CustomerProvider } from './Components/CustomerContext';
import { EventProvider } from './Components/EventContext';
import GetQuotePage from './Pages/GetQuotePage';
import ThankyouCatering from './Pages/ThankyouCatering';

function App() {
  return (
    <div className="App">
     <Router>
     <EventProvider> 
     <CustomerProvider>
        <Routes>
          <Route path="/dishFeedback" element={<DishFeedBackPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/thankyouQuote" element={<ThankyouCatering/>} />
          <Route path="/feedback" element={<UserFeedBackPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/quote" element={<GetQuotePage />} />
          <Route path="/" element={<UserFeedBackPage />} />
          <Route path="*" element={<h1 style={{ marginTop: "5rem" }}>404 Not Found</h1>} />
        </Routes>
        </CustomerProvider>
        </EventProvider>
      </Router>
    </div>
  );
}

export default App;
