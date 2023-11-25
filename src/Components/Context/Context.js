import React, { useState, useEffect, createContext } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
    const [selectedGroup, setSelectedGroup] = useState('9');
    const [path, setPath] = useState(window.location.pathname);
    const [loc, setLoc] = useState("Welcome to AASpb Schedule Admin API");

    useEffect(() => {
        const handleSetPath = () => {
            setPath(window.location.pathname);
            setLoc(loc);
        }

        handleSetPath();

        window.addEventListener('popstate', handleSetPath);

        if (path.startsWith('/edit')) {
            setLoc('Редактирование | id: ' + selectedGroup);
        } else if (path.startsWith('/new/')) {
            setLoc('Новая группа');
        } else {
            setLoc("Welcome to AASpb schedule Admin API");
        }

        return () => {
            window.addEventListener('popstate', handleSetPath);
        }
    }, [path, loc, selectedGroup]);

    return (
        <Context.Provider value={{ selectedGroup, setSelectedGroup, path, setPath, loc, setLoc }}>
            {props.children}
        </Context.Provider>
    );
}

export default Context;
