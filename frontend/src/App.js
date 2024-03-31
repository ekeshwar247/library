import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Createbook from './pages/createbook.jsx';
import Home from './pages/home.jsx';
import Editbook from './pages/editbook.jsx';
import Showbook from './pages/showbook.jsx';
import Deletebook from './pages/deletebook.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create/' element={<Createbook/>} />
        <Route path='/books/details/:id' element={<Showbook/>} />
        <Route path='/books/edit/:id' element={<Editbook/>} />
        <Route path='/books/delete/:id' element={<Deletebook/>} />
      </Routes>
    </div>
  );
}

export default App;
