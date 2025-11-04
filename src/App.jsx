import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NotFound from './pages/NotFound';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ProjectDetailContainer from './components/Portfolio/ProjectDetailContainer/ProjectDetailContainer';
import Footer from './components/Footer/Footer';

const App = () => {
useEffect(() => {
    const handleContextMenu = (event) => event.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
}, []);

return (
    <NavBarProvider>
    {/* ROOT LAYOUT: ocupa viewport y maneja light/dark */}
    <div className="min-h-svh flex flex-col bg-white text-black dark:bg-black dark:text-neutral-100">
        <BrowserRouter>
        <NavBar />

        {/* MAIN empuja el footer hacia abajo */}
        <main className="flex-1">
            {/* Contenido centrado y con ancho máximo */}
            <div className="max-w-screen-3xl mx-auto">
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="project/:id" element={<ProjectDetailContainer />} />
                <Route path="*" element={<NotFound />} />
                <Route path="notfound" element={<NotFound />} />
            </Routes>
            </div>
        </main>

        <Footer />
        </BrowserRouter>
    </div>
    </NavBarProvider>
);
};

export default App;
