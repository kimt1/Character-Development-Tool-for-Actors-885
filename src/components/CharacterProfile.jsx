import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiHeart, FiTarget, FiMapPin, FiClock, FiBook } = FiIcons;

function CharacterProfile({ character }) {
  const profileItems = [
    { icon: FiUser, label: 'Name', value: character.characterName },
    { icon: FiClock, label: 'Age', value: character.characterAge },
    { icon: FiHeart, label: 'Emotional State', value: character.emotionalState },
    { icon: FiTarget, label: 'Motivation', value: character.motivation },
    { icon: FiMapPin, label: 'Environment', value: character.environment },
    { icon: FiBook, label: 'Background', value: character.characterBackground }
  ];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 sticky top-8"
    >
      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiUser} className="text-2xl text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Character Profile</h3>
        <p className="text-gray-300 text-sm">Your character at a glance</p>
      </div>

      <div className="space-y-4">
        {profileItems.map((item, index) => (
          item.value && (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-start space-x-3">
                <SafeIcon icon={item.icon} className="text-purple-400 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm mb-1">{item.label}</h4>
                  <p className="text-gray-300 text-sm break-words">{item.value}</p>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </div>

      {character.personalityTraits && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 pt-6 border-t border-white/10"
        >
          <h4 className="text-white font-medium mb-3 flex items-center">
            <SafeIcon icon={FiTarget} className="text-purple-400 mr-2" />
            Personality Traits
          </h4>
          <p className="text-gray-300 text-sm">{character.personalityTraits}</p>
        </motion.div>
      )}

      {character.speechPattern && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4"
        >
          <h4 className="text-white font-medium mb-3 flex items-center">
            <SafeIcon icon={FiBook} className="text-purple-400 mr-2" />
            Speech Pattern
          </h4>
          <p className="text-gray-300 text-sm">{character.speechPattern}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default CharacterProfile;