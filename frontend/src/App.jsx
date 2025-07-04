import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import SignInForm from "./auth/forms/SignInForm"
import SignUpForm from "./auth/forms/SignUpForm"
import Home from "./pages/Home"
import About from "./pages/About"
import NewsArticles from "./pages/NewsArticles"
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<SignInForm/>}/>
      <Route path="/sign-up" element={<SignUpForm/>}/>

      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<NewsArticles />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App