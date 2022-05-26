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
          mgs2:"o ve la tendencia actual en la",
          mgs3:"y guarda lo que quieras en",
          mgs4:"¿Listo para mirar?",
          mgs5:"para poder buscar y ver más.",
          btn1:"sección de búsqueda",
          btn2:"sección de tendencias",
          btn3:"sección de favoritos",
          btn4:"Regístrate"
        },
        header:{
            nav1:"Inicio",
            nav2:"Búsqueda",
            nav3:"Tendencias",
            nav4:"Favoritos",
            nav5:"Ingresar",
            subNav:{
                btn1:"Cerrar seccion"
            },
            msg1:'Estas seguro?',
            msg2:"Si",
            msg3:"Cancelar"
        },
        footer:"Portafolio",
        trends:{
            title:"Tendencias"
        },
        search:{
            title:" Busquedas",
            placeholder:" Pelicula ...",
            btn:"Buscar",
            msg1:"No se han encontrado resultados",
            msg2:"Debes poner una palabra",
            msg3:"Debes poner una palabra con más de 3 caracteres"
        },
        favorite:{
            title:"Favorite",
            line1:"No hay nada aqui todavia",
            btn:"Reiniciar"
        },
        login:{
            title:"Iniciar sesión",
            label1:"Correo Electronico",
            label2:"Contraseña",
            msg1:"Los campos no pueden estar vacíos",
            msg2:"Debes escribir un correo electrónico válido",
            msg3:"Credenciales no válidas",
            msg4:"Ingresado correctamente",
            error:"Ocurrio un error, por favor intentalo de nuevo mas tarde"
        },
        extra:{
            line1:"No hay resultado",
            line2:"Se ha guardado en favoritos",
            line3:"Ha sido eliminado a favoritos"
        },
        error:{
            line1:"Esta Página no existe"
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
            mgs4:"Ready to watch?",
            mgs5:"to be able to search and see more.",
            btn1:"search section",
            btn2:"trends section",
            btn3:"favorites section",
            btn4:"Sign in"
        },
        header:{
            nav1:"Home",
            nav2:"Search",
            nav3:"Trends",
            nav4:"Favorites",
            nav5:"Sing in",
            subNav:{
                btn1:"Sing out"
            },
            msg1:'Are you sure?',
            msg2:"Yes",
            msg3:"Cancel"
        },
        footer:"Portfolio",
        trends:{
            title:"Trends"
        },
        search:{
            title:"Search",
            placeholder:"Movie...",
            btn:"Search",
            msg1:"No results found",
            msg2:"You must put a word",
            msg3:"You must put a word with more than 3 characters"
        },
        favorite:{
            title:"Favorites",
            line1:"There is nothing here yet",
            btn:"Reset"
        },
        login:{
            title:"Sign In",
            label1:"Email",
            label2:"Password",
            msg1:"The fields cannot be empty",
            msg2:"You must write a valid email",
            msg3:"Invalid Credentials",
            msg4:"Entered correctly",
            error:"An error occurred, please try again later"
        },
        extra:{
            line1:"No results found",
            line2:"Has been saved to favorites",
            line3:"Has been deleted to favorites"
        },
        error:{
            line1:"This page does not exist"
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