import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{border: "1px solid red", display: "flex", flexWrap: "wrap", justifyContent: 'space-between'}}>
      {["Khra Mitha","Ckae","Browine","Lado",5,6].map((item,index) => <Cards key={index} title={item}  />)}
      </div>
      <Footer />
      asd
    </div>
  );
}

export default App;
