import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Portfolio from './component/Portfolio';
import Project from './component/Projects/Projects';
import Career from './component/Career/Career';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Portfolio/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/career" element={<Career/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
