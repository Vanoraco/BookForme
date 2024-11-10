
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ProjectRoutes from './Routes';

function App() {
  

  return (
    <Router>
      <ProjectRoutes />
    </Router>
  )
}

export default App
