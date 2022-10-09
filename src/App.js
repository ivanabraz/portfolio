import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ProjectDetailContainer from './components/Portfolio/ProjectDetailContainer/ProjectDetailContainer';
import Footer from './components/Footer/Footer';

const App = () => {

    //UserWay Widget
    // (function(d){var s = d.createElement("script");
    // s.setAttribute("data-account", "rwp6zl1YVf");
    // s.setAttribute("src", "https://cdn.userway.org/widget.js");
    // (d.body || d.head).appendChild(s);})(document)

    return (
        <NavBarProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={ <Home /> }/>
                    <Route path="info" element={ <Info /> }/>
                    <Route path="project/:id" element={ <ProjectDetailContainer/> }/>
                    <Route path="*" element={ <NotFound /> }/>
                    <Route path="notfound" element={ <NotFound /> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
