import './App.css';
import Header from './components/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results'


const App = () => {
  return (
    <Router>
      <div className="content bg-secondary text-primary">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
