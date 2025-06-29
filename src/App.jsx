import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import CharacterForm from './components/CharacterForm';
import SuggestionsDashboard from './components/SuggestionsDashboard';
import { CharacterProvider } from './context/CharacterContext';
import './App.css';

function App() {
  return (
    <CharacterProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Header />
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
          >
            <Routes>
              <Route path="/" element={<CharacterForm />} />
              <Route path="/suggestions" element={<SuggestionsDashboard />} />
            </Routes>
          </motion.main>
        </div>
      </Router>
    </CharacterProvider>
  );
}

export default App;