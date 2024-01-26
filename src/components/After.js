import React from 'react';
import Cardlist from './Cardlist';
import Offer from './Offer';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
export default function Home() {
  
  const heroStyle = {
    backgroundImage: 'url("https://www.wallpapertip.com/wmimgs/12-124086_817988-title-food-burger-french-fries-wallpaper-burger.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height:'82vh' ,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    position: 'relative',
    zindex: -1,
  };
 
  const tag={
    position: 'relative',
    top: '0vh',
    left: '6',
    color: 'rgb(255, 255, 255)',
   fontSize:'12vh',
}
  return (
  <>
     <Navbar2/>
    <div style={heroStyle}>
     <h1 style={tag}>Fast Food Restraurent</h1>
</div>
<Cardlist/>
    <Offer/>
    <Footer/>
  
  </>
  )
}