import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiTarget, FiStar } = FiIcons;

function Header() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-full">
              <SafeIcon icon={FiUser} className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Character Builder
              </h1>
              <p className="text-gray-300 text-sm">Method Acting & NLP Techniques</p>
            </div>
          </motion.div>
          
          <div className="flex items-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiTarget} className="text-purple-400" />
              <span className="text-sm">Deep Character Work</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiStar} className="text-pink-400" />
              <span className="text-sm">Authentic Performance</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;