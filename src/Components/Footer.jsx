import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export const Footer = () => {
  const [ t, i18n ] = useTranslation('global')

  return (
<>
    <footer className="center-class ubuntu-bold m-3">
        <p>&copy; <span>{ new Date().getFullYear() }</span> - Palma Port Hostel - {t("Footer.AlbergueJuvenil")}</p>

<section>
    <Button className="btn-sm" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('es')}>
    <img width={15} src="es.png" alt="bandera expañola"/>
    ES
    </Button>

    <Button className="btn-sm mx-1" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('en')}>
    <img width={15} src="en.png" alt="bandera inglesa"/>
    EN
    </Button>

    <Button className="btn-sm" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('ge')}>
    <img width={15} src="ge.png" alt="bandera alemana"/>
    GE
    </Button>

    <Button className="btn-sm mx-1" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('fr')}>
    <img width={15} src="fr.png" alt="bandera francesa"/>
    FR
    </Button>
</section>

    </footer>
</>
  )
}
