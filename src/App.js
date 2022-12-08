import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';
import Work from './pages/Work';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ProjectDetailContainer from './components/Portfolio/ProjectDetailContainer/ProjectDetailContainer';

const App = () => {

    return (
        <NavBarProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={ <Home /> }/>
                    <Route path="work" element={ <Work /> }/>
                    <Route path="info" element={ <Info /> }/>
                    <Route path="project/:id" element={ <ProjectDetailContainer/> }/>
                    <Route path="*" element={ <NotFound /> }/>
                    <Route path="notfound" element={ <NotFound /> }/>
                </Routes>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
