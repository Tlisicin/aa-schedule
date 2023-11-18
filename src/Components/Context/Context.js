import React, { useState, createContext } from 'react';

export const Context = createContext(null);

export function ContextProvider(props) {
  const [selectedGroup, setSelectedGroup] = useState('12');

  return (
    <Context.Provider value={{ selectedGroup, setSelectedGroup }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;