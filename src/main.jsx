import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Editpage from './Pages/editPage.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App1(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<App />}/>
            <Route path="/editPage" element={<Editpage />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
)
