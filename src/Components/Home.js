import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Story from './Story/Story'
import Enter from './Enter/Enter';
import Contactus from './Contactus/Contactus';




function Home()  {
  return (
    <div>
      <Header />
      <Menu />
      <Story />
      <Enter />
      <Contactus /> 
    </div>
  );
}
   
export default Home;