import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export const Footer = () => {
  const [ t, i18n ] = useTranslation('global')

  return (
<>
    <footer className="center-class ubuntu-bold mt-3">
        <p>&copy; <span>{ new Date().getFullYear() }</span> - Palma Port Hostel - {t("Footer.AlbergueJuvenil")}</p>

<section>
<div className="col-md-3 p-1">
    <Button className="btn-sm" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('es')}>
    ES
    </Button>
</div>

<div className="col-md-3 p-1">
    <Button className="btn-sm" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('en')}>
    EN
    </Button>
</div>
<div className="col-md-3 p-1">
    <Button className="btn-sm" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('ge')}>
    GE
    </Button>
</div>
<div className="col-md-3 p-1">
    <Button className="btn-sm" variant="outline-dark fw-bold" onClick={() => i18n.changeLanguage('fr')}>
    FR
    </Button>
</div>
</section>

    </footer>
</>
  )
}
