import { createContext, useState } from "react";

const initialLanguage = localStorage.getItem("lang") || "en-US";

const translations = {
    "es-ES": {
        lang:"es-ES",
        home:{
          "language-btn": "Español",
          line1:"Películas ilimitadas",
          line2:"Mira en cualquier lugar. Cancele en cualquier momento.",
          mgs1:"Bienvenida usuario, busca en la",
          mgs2:"o ver la tendencia actual en la",
          mgs3:"y guarda lo que quieras en",
          mgs4:"",
          btn1:"sección de búsqueda",
          btn2:"sección de tendencias",
          btn3:"sección de favoritos",
          btn4:""
      }
    },
    "en-US": {
        lang:"en-US",
        home:{
            "language-btn": "English",
            line1:"Unlimited movies",
            line2:"Watch anywhere. Cancel anytime.",
            mgs1:"Welcome user, search in the",
            mgs2:"or see the current trend in the",
            mgs3:"and save what you want in",
            mgs4:"",
            btn1:"search section",
            btn2:"trends section",
            btn3:"favorites section",
            btn4:""
        }
    },
};



const LanguageContext = createContext();
export default LanguageContext;



function LanguageProvider ({children}) {
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translations[language])

    const handleLanguage = () =>{ 
        if(language === "es-ES"){
            setLanguage("en-US")
            setTexts(translations["en-US"])
            localStorage.setItem("lang","en-US")
        }
        else{
            setLanguage("es-ES")
            setTexts(translations["es-ES"])
            localStorage.setItem("lang","es-ES")
        }
    }

    const data = {texts,handleLanguage}

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}
export {LanguageProvider};