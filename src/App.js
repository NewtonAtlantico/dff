import {  Routes,Route } from 'react-router-dom';
import { Login, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login /> }/>
      <Route path='/dashboard' element={<Home /> }/>
    </Routes>
  );
}

export default App;
