import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Qualifications from '@/pages/Qualifications';
import Contact from '@/pages/Contact';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import { ThemeProvider } from '@/contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground geometric-bg">
        <Helmet>
          <title>John McDove - Full-Stack Developer Portfolio</title>
          <meta name="description" content="Professional portfolio of John McDove, showcasing full-stack development projects, skills, and experience in modern web technologies." />
          <meta name="keywords" content="full-stack developer, web development, React, Python, JavaScript, portfolio" />
          <meta name="author" content="John McDove" />
          <meta property="og:title" content="John McDove - Full-Stack Developer Portfolio" />
          <meta property="og:description" content="Professional portfolio showcasing full-stack development projects and expertise" />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        </Helmet>
        
        <Navigation />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;