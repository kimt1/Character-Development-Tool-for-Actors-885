import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiUser, FiHeart, FiTarget, FiBook, FiMapPin, FiClock } = FiIcons;

function CharacterForm() {
  const navigate = useNavigate();
  const { setCharacterData } = useCharacter();
  const [formData, setFormData] = useState({
    characterName: '',
    characterAge: '',
    characterBackground: '',
    emotionalState: '',
    physicality: '',
    motivation: '',
    relationships: '',
    environment: '',
    timeperiod: '',
    conflictType: '',
    personalityTraits: '',
    speechPattern: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacterData(formData);
    navigate('/suggestions');
  };

  const formFields = [
    {
      name: 'characterName',
      label: 'Character Name',
      icon: FiUser,
      placeholder: 'e.g., Sarah Mitchell, Detective Johnson...',
      type: 'text'
    },
    {
      name: 'characterAge',
      label: 'Age & Life Stage',
      icon: FiClock,
      placeholder: 'e.g., 35, middle-aged professional...',
      type: 'text'
    },
    {
      name: 'characterBackground',
      label: 'Background & History',
      icon: FiBook,
      placeholder: 'e.g., Grew up in rural town, lost parents early...',
      type: 'textarea'
    },
    {
      name: 'emotionalState',
      label: 'Current Emotional State',
      icon: FiHeart,
      placeholder: 'e.g., Anxious but determined, grieving but hopeful...',
      type: 'text'
    },
    {
      name: 'motivation',
      label: 'Primary Motivation',
      icon: FiTarget,
      placeholder: 'e.g., Seeking revenge, finding love, protecting family...',
      type: 'text'
    },
    {
      name: 'environment',
      label: 'Environment & Setting',
      icon: FiMapPin,
      placeholder: 'e.g., Urban office, rural farmhouse, hospital...',
      type: 'text'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Build Your Character
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Tell us about the character you want to develop. We'll provide personalized suggestions using method acting and NLP techniques.
        </p>
      </motion.div>

      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {formFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <label className="flex items-center space-x-2 text-gray-200 font-medium">
                <SafeIcon icon={field.icon} className="text-purple-400" />
                <span>{field.label}</span>
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-gray-200 font-medium">
              <SafeIcon icon={FiUser} className="text-purple-400" />
              <span>Personality Traits</span>
            </label>
            <textarea
              name="personalityTraits"
              value={formData.personalityTraits}
              onChange={handleInputChange}
              placeholder="e.g., Introverted but passionate, perfectionist, empathetic..."
              rows={3}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-gray-200 font-medium">
              <SafeIcon icon={FiBook} className="text-purple-400" />
              <span>Speech & Communication</span>
            </label>
            <textarea
              name="speechPattern"
              value={formData.speechPattern}
              onChange={handleInputChange}
              placeholder="e.g., Speaks slowly when nervous, uses technical jargon..."
              rows={3}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Generate Character Development Plan</span>
          <SafeIcon icon={FiArrowRight} className="text-xl" />
        </motion.button>
      </motion.form>
    </div>
  );
}

export default CharacterForm;