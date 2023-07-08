import Header from './components/Header/Header';
import Main from './Pages/Main/Main';
import Hero from './Pages/Hero/Hero';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Maitenance from './Pages/Maintanence/Maitenance';
import UserAcc from './Pages/UserAcc/UserAcc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/main' element={<Main/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/sign-up' element={<SignUp/>}/>
  <Route path='/sign-up' element={<SignUp/>}/>
  <Route path='/acc-test' element={<UserAcc/>}/>
  <Route path='/maitenance' element={<Maitenance/>}/>
</Routes>
<Footer/>
</BrowserRouter>
  );
}

export default App;
