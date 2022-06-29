import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/home';
import Contact from '../pages/contact/Contact';
function RoutePage() {

    
    return ( 
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/kontakt' element={<Contact/>}/>
        </Routes>
     );
}

export default RoutePage;