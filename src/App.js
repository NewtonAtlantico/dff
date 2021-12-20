import {  Routes,Route } from 'react-router-dom';
import { Login, Home, Dashboard } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login /> }/>
      <Route path='dashboards' element={<Home /> }>
        <Route path=':dashboardName' element={<Dashboard />}/>
      </Route>
    </Routes>
  );
}

export default App;
