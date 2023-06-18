import React, { useContext } from 'react'
import {useLanguageContext,useLanguageSelectContext,useLanguagesContext,useLanguageToggleContext}  from './LanguageProvider'

const Body = () => {
    const language = useLanguageContext();
    const languages = useLanguagesContext();
    const languageSelect = useLanguageSelectContext();


    console.log(languageSelect)
    return (
        <div>
            <h1>{languageSelect.text.title} </h1>
            <h2>{languageSelect.text.description}</h2>
        </div>
    )
}

export default Body