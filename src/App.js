import React from "react";
import Navbar from './components/Navbar.js';
import Voucher from './components/Voucher.js';

const App = () =>{
  return(
    <div className="container w-[95%] max-w-5xl my-8 mx-auto">
      <Navbar/>
      <Voucher/>
    </div>
  )
}

export default App;