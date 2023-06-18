import React, { useContext } from 'react'
import "../App.css"
import {useLanguageContext,useLanguageToggleContext}  from './LanguageProvider'


const Navbar = () => {
    const language = useLanguageContext();
   
    const cambiaLanguage = useLanguageToggleContext();
   
   

    return (
        <div className="navbar">
           
            <p>Idioma atual: {language}</p>
            <button style ={{width:'200px',height:'30px',borderRadius:'10px'}} onClick={cambiaLanguage}>{language}</button>
        </div>
    )
}

export default Navbar