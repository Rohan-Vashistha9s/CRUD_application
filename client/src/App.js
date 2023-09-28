import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


//components
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Navbar from './components/Navbar';
import CodeForInterview from './components/CodeForInterview';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/'  element={<CodeForInterview/>} />
    <Route path='/add' element={ <AddUser/>} />
    <Route path='all' element={<AllUser/>} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
   