import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/homePage';
import NavBar from './components/navbar';


function App() {

  return (
    <>
     <BrowserRouter>
      <NavBar/>
      <HomePage/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );


}

export default App;
