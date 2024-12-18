import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Contactus from './Components/Contactus/Contactus';
import Disclaimer from './pages/Disclaimer';
import Developer from './pages/Developer';
import Faq from './pages/Faq';
import StartPage from './pages/Fipond/StartPage';

import { Route, Routes } from 'react-router-dom';

function App()  {
  return (
    <>  
      <div>   
        
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/fi$pond' element = {<StartPage />}/>
          <Route path = '/contact-us' element = {<Contactus />} />
          <Route path = '/contact-us/disclaimer' element = {<Disclaimer />} />
          <Route path = '/contact-us/developer' element = {<Developer />} />
          <Route path = '/contact-us/faq' element = {<Faq />} />
        </Routes>
        
        <Footer />
      </div>
    </>  
  );
}
 
export default App;