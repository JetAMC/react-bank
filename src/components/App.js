import React, { useState } from 'react'
import AllOffers from './AllOffers'
import PopupSuccess from './PopupSuccess'



function App() {
  const [oneOffer, setOneOffer] = useState(null);

  function open(offer) {
    setOneOffer(offer);
  }

  function close() {
    setOneOffer(false);
  }

  return (
    <div>
      <AllOffers open={open} />
      <PopupSuccess oneOffer={oneOffer} close={close} />
    </div>
  )
}

export default App