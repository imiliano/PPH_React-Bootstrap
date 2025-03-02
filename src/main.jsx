import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HostelApp } from '../HostelApp'

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import global_ge from './translations/ge/global.json';
import global_fr from './translations/fr/global.json';

import 'bootstrap/dist/css/bootstrap.min.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources:{
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    ge: {
      global: global_ge
    },
    fr: {
      global: global_fr
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <I18nextProvider i18n={ i18next }>

    <HashRouter>

      <HostelApp />
      
    </HashRouter>
    
    </I18nextProvider>

  </StrictMode>
)
