import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiChevronUp, FiTarget, FiClock, FiCheckCircle } = FiIcons;

function SuggestionCard({ suggestion }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const toggleExercise = (exerciseIndex) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(exerciseIndex)) {
      newCompleted.delete(exerciseIndex);
    } else {
      newCompleted.add(exerciseIndex);
    }
    setCompletedExercises(newCompleted);
  };

  const categoryColors = {
    'Method Acting': 'from-blue-500 to-cyan-500',
    'NLP Techniques': 'from-green-500 to-emerald-500',
    'Physical Work': 'from-orange-500 to-red-500',
    'Emotional Preparation': 'from-purple-500 to-pink-500',
    'Voice & Speech': 'from-indigo-500 to-purple-500',
    'Character Research': 'from-yellow-500 to-orange-500'
  };

  return (
    <motion.div
      layout
      className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
    >
      <motion.div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`bg-gradient-to-r ${categoryColors[suggestion.category] || 'from-gray-500 to-gray-600'} p-3 rounded-xl`}>
              <SafeIcon icon={suggestion.icon} className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{suggestion.title}</h3>
              <p className="text-gray-300 text-sm">{suggestion.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <SafeIcon icon={FiClock} />
                <span>{suggestion.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                <SafeIcon icon={FiTarget} />
                <span>{suggestion.difficulty}</span>
              </div>
            </div>
            <SafeIcon 
              icon={isExpanded ? FiChevronUp : FiChevronDown} 
              className="text-2xl text-gray-400" 
            />
          </div>
        </div>
        <p className="text-gray-300 mt-4">{suggestion.description}</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10"
          >
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Practical Exercises</h4>
                <div className="space-y-3">
                  {suggestion.exercises.map((exercise, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        completedExercises.has(index)
                          ? 'bg-green-500/20 border-green-500/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => toggleExercise(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-3">
                        <SafeIcon 
                          icon={FiCheckCircle} 
                          className={`text-xl mt-0.5 ${
                            completedExercises.has(index) ? 'text-green-400' : 'text-gray-400'
                          }`} 
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-white mb-1">{exercise.name}</h5>
                          <p className="text-gray-300 text-sm">{exercise.description}</p>
                          {exercise.steps && (
                            <ul className="mt-2 space-y-1">
                              {exercise.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="text-gray-400 text-sm flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {suggestion.focusAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {suggestion.tips && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Pro Tips</h4>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                    <ul className="space-y-2">
                      {suggestion.tips.map((tip, index) => (
                        <li key={index} className="text-gray-200 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">💡</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SuggestionCard;