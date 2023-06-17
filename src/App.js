import './App.css';
import Header from './components/Header/Header';
import Main from './Pages/Main/Main';
import Hero from './Pages/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/main' element={<Main/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
