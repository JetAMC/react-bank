import React, { useState } from 'react'
import AllOffers from './AllOffers'
import DetailedOffer from './DetailedOffer'
import PopupSuccess from './PopupSuccess'
import {
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";



function App() {

  const [oneOffer, setOneOffer] = useState(null);

  function open(offer) {
      setOneOffer(offer);
  }

  function close() {
      setOneOffer(false);
  }



  return (
    <BrowserRouter>
      <Route exact path="/AllOffers" component={(props) => <AllOffers {...props} open={open} close={close} oneOffer={oneOffer}/>} />
      <Redirect to="/AllOffers" />
      <Route path="/AllOffers/:id" component={(props) => <DetailedOffer {...props} open={open} close={close} oneOffer={oneOffer}/>} />
      <PopupSuccess oneOffer={oneOffer} close={close} />
      {/* ... */}
    </BrowserRouter>
  )
}

export default App