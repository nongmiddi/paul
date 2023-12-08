import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping, faDollarSign,faXmark } from '@fortawesome/free-solid-svg-icons'
import "./components/modal.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [modal, setModal] = useState(false);
  const [buy, setBuy] = useState(false);
  const [yes,setYes]=useState(false);


  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setBuy(!buy);
  };

  const toggleModal3 = () => {
    setYes(!yes);
  };

  return (
    <div className="App">
     <img className='img-Profile' src='/images/Profile.png' />

     <div className='icon-container'>
     <h1 className='text'> 1000 POINTS </h1>
     <button className='icon-button'><FontAwesomeIcon onClick={toggleModal}  icon={faCartShopping} /></button>
     </div>

     {buy && (
        <div className="modal">

          <div className="overlay"></div>
          <div className="modal-content" style={{width:"350px" , height:"100px" , paddingBottom:"10px" ,paddingTop:"50px"}}>

          
          <div className='accept'> Do you want to use this voucher?</div>
          <div className='choose'>
          <button className='BUT' onClick={() => { toggleModa12(); toggleModal3();}}> yes </button>
          <button className='BUT' onClick={() => { toggleModal(); toggleModal2();}}> no </button>
          </div>
          

          </div>
        </div>
      )}

      {yes && (
        <div className="modal">

          <div className="overlay"></div>
          <div className="modal-content" style={{width:"350px" , height:"100px" , paddingBottom:"10px" ,paddingTop:"50px"}}>
          
          <div className='qr'>
          <img className='img1' src='/images/QR.png' /> 
          </div>
          </div>
        </div>
      )}

      {modal && (
        
        <div className="modal">

          <div className="overlay"></div>
          <div className="modal-content">

          <div className='ten'>
            <img className='img-tenper' src='/images/10per.png' /> 
            <button className='buy-button' onClick={() => { toggleModal(); toggleModal2();}}>
             BUY 500
            </button>
          </div>

          <div className='ten'>
            <img className='img-tenper' src='/images/special.png' /> 
            <button className='buy-button'  onClick={() => { toggleModal(); toggleModal2();}}>
             BUY 1,000
            </button>
          </div>

          <div className='ten'>
            <img className='img-tenper' src='/images/free.png' /> 
            <button className='buy-button'  onClick={() => { toggleModal(); toggleModal2();}}>
             BUY 100
            </button>
          </div>

          <button className="close-modal" onClick={toggleModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>

          </div>
    
        </div>
      )}
     
      
     <div className="choice-container">
        <button className="choice-item">BALANCE</button>
        <div className="choice-item" > | </div>
        <a href="/editPage"><button className="choice-item" >EDIT</button></a>
        <div className="choice-item"> | </div>
        <a href="/history"><button className="choice-item" >HISTORY</button></a>
      </div>

      <div className="depost-container">
        <div className="depost-item">2000 <FontAwesomeIcon icon={faDollarSign} /></div>
        <button className='depost-button'> DEPOSIT </button>
        
      </div>

      

    
      
    </div>
  );
}

export default App
