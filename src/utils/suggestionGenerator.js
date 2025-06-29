import * as FiIcons from 'react-icons/fi';

const { 
  FiBrain, FiHeart, FiUser, FiMic, FiActivity, FiBookOpen,
  FiEye, FiTarget, FiUsers, FiClock, FiMapPin, FiFeather
} = FiIcons;

export const generateSuggestions = (characterData) => {
  const suggestions = [];

  // Method Acting Suggestions
  if (characterData.emotionalState) {
    suggestions.push({
      category: 'Method Acting',
      icon: FiHeart,
      title: 'Emotional Memory Work',
      description: 'Use your personal experiences to connect with your character\'s emotional state.',
      duration: '30-45 minutes',
      difficulty: 'Intermediate',
      exercises: [
        {
          name: 'Sense Memory Exercise',
          description: 'Recall a personal experience that matches your character\'s emotional state.',
          steps: [
            'Find a quiet space and close your eyes',
            'Think of a time you felt similar emotions to your character',
            'Focus on sensory details: what did you see, hear, smell, taste, touch?',
            'Let the emotion build naturally without forcing it',
            'Practice transitioning in and out of this emotional state'
          ]
        },
        {
          name: 'Emotional Substitution',
          description: 'Replace the character\'s circumstances with your own to access genuine emotion.',
          steps: [
            'Identify the core emotion your character is experiencing',
            'Find a parallel situation from your own life',
            'Practice the scene using your substituted circumstances',
            'Gradually blend your experience with the character\'s reality'
          ]
        }
      ],
      focusAreas: ['Emotional authenticity', 'Personal connection', 'Sense memory'],
      tips: [
        'Always have an emotional "way out" - practice returning to neutral',
        'Keep a journal of emotional memories you can draw upon',
        'Never force emotions - let them arise naturally'
      ]
    });
  }

  // NLP Techniques
  if (characterData.personalityTraits || characterData.motivation) {
    suggestions.push({
      category: 'NLP Techniques',
      icon: FiBrain,
      title: 'Anchoring & State Management',
      description: 'Use NLP anchoring techniques to quickly access your character\'s mental state.',
      duration: '20-30 minutes',
      difficulty: 'Beginner',
      exercises: [
        {
          name: 'Physical Anchor Creation',
          description: 'Create a physical gesture that instantly puts you in character.',
          steps: [
            'Think deeply about your character\'s core motivation',
            'When you feel fully connected to this motivation, create a unique physical gesture',
            'Hold the gesture for 10-15 seconds while maintaining the feeling',
            'Repeat this process 5-10 times to strengthen the anchor',
            'Test the anchor by using the gesture to access the character state'
          ]
        },
        {
          name: 'Visualization Rehearsal',
          description: 'Mentally rehearse scenes from your character\'s perspective.',
          steps: [
            'Close your eyes and visualize yourself as the character',
            'See through their eyes, feel their posture and breathing',
            'Run through key scenes in vivid detail',
            'Notice how decisions feel different from this perspective'
          ]
        }
      ],
      focusAreas: ['State management', 'Quick character access', 'Mental rehearsal'],
      tips: [
        'Practice your anchor daily to maintain its effectiveness',
        'Use different anchors for different emotional states of your character',
        'Combine physical anchors with specific breathing patterns'
      ]
    });
  }

  // Physical Work
  if (characterData.characterAge || characterData.physicality) {
    suggestions.push({
      category: 'Physical Work',
      icon: FiActivity,
      title: 'Physicality & Movement',
      description: 'Develop your character\'s unique physical presence and movement patterns.',
      duration: '45-60 minutes',
      difficulty: 'Intermediate',
      exercises: [
        {
          name: 'Character Walk Development',
          description: 'Create a distinctive way of moving that reflects your character\'s inner life.',
          steps: [
            'Start with your natural walk',
            'Consider your character\'s age, health, confidence level',
            'Adjust pace, posture, and weight distribution',
            'Practice walking as the character in different emotional states',
            'Add characteristic gestures or mannerisms'
          ]
        },
        {
          name: 'Animal Study',
          description: 'Study an animal that embodies your character\'s essence.',
          steps: [
            'Choose an animal that reflects your character\'s personality',
            'Observe videos of this animal moving and behaving',
            'Practice incorporating subtle animal qualities into human movement',
            'Focus on rhythm, energy, and spatial relationships'
          ]
        }
      ],
      focusAreas: ['Body language', 'Movement quality', 'Physical characterization'],
      tips: [
        'Film yourself to see what your physicality looks like from the outside',
        'Practice your character\'s physicality in everyday activities',
        'Consider how injuries, age, or profession might affect movement'
      ]
    });
  }

  // Voice & Speech Work
  if (characterData.speechPattern || characterData.background) {
    suggestions.push({
      category: 'Voice & Speech',
      icon: FiMic,
      title: 'Vocal Character Development',
      description: 'Develop your character\'s unique vocal patterns and speech habits.',
      duration: '30-40 minutes',
      difficulty: 'Intermediate',
      exercises: [
        {
          name: 'Vocal Placement Exploration',
          description: 'Find where your character\'s voice resonates in their body.',
          steps: [
            'Hum at your natural pitch and notice where you feel vibration',
            'Experiment with different placements: chest, throat, head',
            'Consider your character\'s confidence, health, and background',
            'Practice speaking from your character\'s vocal placement',
            'Record yourself to hear the difference'
          ]
        },
        {
          name: 'Speech Pattern Analysis',
          description: 'Develop specific speech rhythms and patterns for your character.',
          steps: [
            'Consider your character\'s education, region, and social status',
            'Practice different pacing: fast, slow, hesitant, confident',
            'Work on specific speech habits or verbal tics',
            'Practice conversations in character with different emotional states'
          ]
        }
      ],
      focusAreas: ['Vocal placement', 'Speech rhythm', 'Dialect work'],
      tips: [
        'Record yourself regularly to track vocal development',
        'Listen to people who share your character\'s background',
        'Don\'t overdo accents - subtlety is often more effective'
      ]
    });
  }

  // Character Research
  if (characterData.characterBackground || characterData.environment) {
    suggestions.push({
      category: 'Character Research',
      icon: FiBookOpen,
      title: 'Deep Background Research',
      description: 'Thoroughly research your character\'s world to build authentic choices.',
      duration: '60-90 minutes',
      difficulty: 'Advanced',
      exercises: [
        {
          name: 'Historical Context Study',
          description: 'Research the time period and social context of your character.',
          steps: [
            'Research major events during your character\'s lifetime',
            'Study social norms, technology, and daily life of the era',
            'Understand economic and political conditions',
            'Consider how these factors shaped your character\'s worldview'
          ]
        },
        {
          name: 'Character Biography Creation',
          description: 'Write a detailed life history for your character.',
          steps: [
            'Create a timeline of major life events',
            'Detail relationships with family, friends, and colleagues',
            'Identify formative experiences and traumas',
            'Develop your character\'s hopes, fears, and secrets',
            'Write diary entries from your character\'s perspective'
          ]
        }
      ],
      focusAreas: ['Historical context', 'Character backstory', 'World-building'],
      tips: [
        'Interview people who share your character\'s profession or background',
        'Visit locations similar to where your character lives',
        'Read books, watch films from your character\'s era'
      ]
    });
  }

  // Relationship Work
  if (characterData.relationships || characterData.motivation) {
    suggestions.push({
      category: 'Emotional Preparation',
      icon: FiUsers,
      title: 'Relationship Dynamics',
      description: 'Develop deep, authentic relationships with other characters.',
      duration: '40-50 minutes',
      difficulty: 'Intermediate',
      exercises: [
        {
          name: 'Relationship Mapping',
          description: 'Create detailed maps of your character\'s relationships.',
          steps: [
            'List all characters your character interacts with',
            'Define the history and current status of each relationship',
            'Identify what your character wants from each person',
            'Determine what each person represents to your character',
            'Practice different approaches for different relationships'
          ]
        },
        {
          name: 'Improvised Conversations',
          description: 'Have imaginary conversations with other characters.',
          steps: [
            'Set up chairs for yourself and imaginary scene partners',
            'Improvise conversations about past events',
            'Explore conflicts and unresolved issues',
            'Practice different relationship dynamics'
          ]
        }
      ],
      focusAreas: ['Relationship depth', 'Character objectives', 'Emotional stakes'],
      tips: [
        'Create backstories for relationships not explicitly mentioned in the script',
        'Consider how your character behaves differently with different people',
        'Practice active listening even in imaginary conversations'
      ]
    });
  }

  return suggestions;
};