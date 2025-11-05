import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from '../page/Home'
import Portfolio from '../page/Portfolio'
import HomeIndex from '../page/HomeIndex'
import About from '../page/About'
import Contact from '../page/Contact'
import Welcome from '../page/Welcome'
import Counter from '../page/Counter'
import Profile from './ProfileCard'
import Like from './LikeButton'

function App() {

  return (
    <>
      <Welcome name="이순신" age="24"/>
      <Profile name="홍길동" age="25" hobby="음악감상"/>
      <Like/>
      <Counter/>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}>
            <Route index element={<HomeIndex/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Contact" element={<Contact/>}/>
          </Route>
          <Route path = "/Portfolio" element = {<Portfolio/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
