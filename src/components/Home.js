import React  from "react";
// import Header from "./Header";
// import Footer from "./Footer";


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Overview from './Overview.js';
import Vision from './Vision.js';
import Mission from './Mission.js';
import Services from './Services.js';
import Equipments from './Equipments.js';
import Workforce from './Workforce.js';
import CompletedProjects from './CompletedProjects.js';
import OngoingProjects from './OngoingProjects.js';
import Clients from './Clients.js';
import ContactUs from './ContactUs.js';

const Home=()=>{
    return(
        <>
            <BrowserRouter>
       <Header/>
         <Routes>
            <Route path='/' element={<Overview/>}/>
             <Route path='/mission' element={<Mission/>}/>
             <Route path='/vision' element={<Vision/>}/>
             <Route path='/services' element={<Services/>}/>
             <Route path='/equipment' element={<Equipments/>}/>
             <Route path='/workForce' element={<Workforce/>}/>
             <Route path='/completedProject' element={<CompletedProjects/>}/>
             <Route path='/ongoingProject' element={<OngoingProjects/>}/>
             <Route path='/client' element={<Clients/>}/>
             <Route path='/contact' element={<ContactUs/>}/>
             

         </Routes>
        <Footer/>

      </BrowserRouter>
        </>
    )
}
export default Home