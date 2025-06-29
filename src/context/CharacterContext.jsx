import React, { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};

export const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState(null);

  return (
    <CharacterContext.Provider value={{ characterData, setCharacterData }}>
      {children}
    </CharacterContext.Provider>
  );
};