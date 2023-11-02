import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserFeedBackPage from './Pages/userFeedBackPage';
import ThankYouPage from './Pages/ThankYouPage';
import ButtonPage from './Pages/ButtonPage';
import DishFeedBackPage from './Pages/DishFeedBackPage';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/dishFeedback" element={<DishFeedBackPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/feedback" element={<UserFeedBackPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<UserFeedBackPage />} />
          <Route path="*" element={<h1 style={{ marginTop: "5rem" }}>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
