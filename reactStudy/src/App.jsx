
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
//컴포넌트 import
import MainMenu from './component/MainMenu';
import Info from './component/study1/Info';
import Board from './component/study1/Board';
import Member from './component/study1/Member';
import Store from './component/study1/store';
import Hw from "./component/study1/hw";
import Schedule from "./component/study1/schedule";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<MainMenu/>}/>
        <Route path="/propstate" element = {<Info/>}/>
        <Route path='/BoardMake' element = {<Board/>}/>
        <Route path='/member' element = {<Member/>}/>
        <Route path='/store/*' element = {<Store/>}/>
        <Route path='/Hw' element = {<Hw/>}>
          <Route index element={<Schedule/>}/>
        </Route>
      </Routes>
    </Router>
      
  )
}

export default App
