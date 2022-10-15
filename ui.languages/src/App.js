import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthPage from './pages/AuthPage/AuthPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LanguagesPage from './pages/LanguagesPage/LanguagesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<AuthPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/about' element={<AboutUsPage/>}></Route>
        <Route path='/languages' element={<LanguagesPage/>}></Route>
        {/* <Route path='/profile' element={<Languages />}></Route> */}
      </Routes>
    </>
  );
}

export default App;







