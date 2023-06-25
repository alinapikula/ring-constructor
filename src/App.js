import Header from './components/Header/Header';
import Main from './Pages/Main/Main';
import Hero from './Pages/Hero/Hero';
import Login from './Pages/Login/Login';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/main' element={<Main/>}/>
  <Route path='/login' element={<Login/>}/>
  {/* <Route path='/signup' element={<SignUp/>}/>
  <Route path='/mypage/:userId' element={<UserPage/>}/> */}
</Routes>
<Footer/>
</BrowserRouter>
  );
}

export default App;
