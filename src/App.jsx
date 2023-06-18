import './App.css'
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Body from './components/Body';
import LanguageProvider from './components/LanguageProvider';

function App() {
  // const [language, setLanguage] = useState(languages.english);

  // const handleChangeLA = () => {
  //   setLanguage(() => {
  //     //DICA: Função que troca um idioma por outro (ao clicar no botão)
  //   })
  // }

  return (
    <LanguageProvider>
      <div className='app'>
      <Navbar/>
      <Body/>
      </div>
    </LanguageProvider>
  );
  }

export default App;