import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';
import CurriculumVitae from './pages/CurriculumVitae';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
        <NavBarProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={ <Home /> }/>
                    <Route path="curriculum-vitae" element={ <CurriculumVitae /> }/>
                </Routes>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
