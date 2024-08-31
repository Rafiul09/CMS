"use client";
import React, { createContext, useState } from 'react';

// Create a context for the category
export const CategoryContext = createContext();

// Create a provider component
export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
