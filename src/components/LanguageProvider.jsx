import { createContext } from 'react';
import EN from "../languages/english.json"
import PTBR from "../languages/portuguese.json"
import ES from "../languages/spanish.json"

// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";

const languageContext = React.createContext();
const languagesContext = React.createContext();
const languageToggleContext = React.createContext();
const languageSelectContext = React.createContext();


// eslint-disable-next-line react-hooks/rules-of-hooks, react-refresh/only-export-components
export function useLanguageContext() {
    return useContext(languageContext);
}
export function useLanguagesContext() {
    return useContext(languagesContext);
}
export function useLanguageToggleContext() {
    return useContext(languageToggleContext);
}
export function useLanguageSelectContext() {
    return useContext(languageSelectContext);
}

// eslint-disable-next-line react/prop-types
export function LanguageProvider({ children }) {

const languages = {
    english: {
        id: "ENGLISH",
        text: EN
    },
    portuguese: {
        id: "PORTUGUESE",
        text: PTBR
    },
    spanish: {
        id: "SPANISH",
        text: ES
    }

};
const [language, setLanguage] = useState(languages.english.id);
const [languageSelect, setLanguageSelect] = useState(languages.english)

const cambiaLanguage = () =>{
    if(language == languages.english.id){
        setLanguage(languages.spanish.id);
        setLanguageSelect(languages.spanish);

    }if(language == languages.spanish.id){
        setLanguage(languages.portuguese.id);
        setLanguageSelect(languages.portuguese);
     
    }if(language == languages.portuguese.id){
        setLanguage(languages.english.id);
        setLanguageSelect(languages.english);
       
    }

}




return(
    <languageToggleContext.Provider value = {cambiaLanguage}>
    <languagesContext.Provider value={languages}>
    <languageContext.Provider value={language}>
    <languageSelectContext.Provider value={languageSelect}>
    {children}
    </languageSelectContext.Provider>
    </languageContext.Provider>
    </languagesContext.Provider>
    </languageToggleContext.Provider>
);

}



export default LanguageProvider;