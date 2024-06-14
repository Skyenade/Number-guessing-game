import './App.css';
import Home from './Home';
import NumberCounter from './NumberCounter';
import './firebase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/num' element={<NumberCounter/>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
