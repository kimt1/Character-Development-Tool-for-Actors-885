import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';
import SuggestionCard from './SuggestionCard';
import CharacterProfile from './CharacterProfile';
import { generateSuggestions } from '../utils/suggestionGenerator';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiRefreshCw } = FiIcons;

function SuggestionsDashboard() {
  const navigate = useNavigate();
  const { characterData } = useCharacter();
  
  if (!characterData) {
    navigate('/');
    return null;
  }

  const suggestions = generateSuggestions(characterData);

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <SafeIcon icon={FiArrowLeft} />
          <span>Back to Form</span>
        </button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200"
        >
          <SafeIcon icon={FiRefreshCw} />
          <span>Regenerate</span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Your Character Development Plan
        </h2>
        <p className="text-gray-300 text-lg">
          Personalized techniques to build an authentic, deep character
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-1"
        >
          <CharacterProfile character={characterData} />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-6"
        >
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SuggestionCard suggestion={suggestion} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SuggestionsDashboard;