import './App.css';
import ChooseRide from './pages/ChooseRide';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRides from './pages/HistoryRides';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ChooseRide />} />
          <Route path="/history" element={<HistoryRides />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

