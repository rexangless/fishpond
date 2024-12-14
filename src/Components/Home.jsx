import Header from './Header/Header';
import Menu from './Menu/Menu';
import Story from './Story/Story'
import Enter from './Enter/Enter';
import Contactus from './Contactus/Contactus'
import Footer from './Footer/Footer'

function Home()  {
    return (
      <div>
        {/*<LoginSignup />*/}
        <Header />
        <Menu />
        <Story />
        <Enter />
        <Contactus />
        <Footer />
      </div>  
    );
  }
   
  export default Home;
  