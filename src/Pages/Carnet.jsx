import { NavLink } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export const Carnet = () => {
    const [ t ] = useTranslation('global')

  return (
<div className="container-xl my-4">
    <div className="center-class">
<br/>
        <h4 className="ubuntu-bold text-secondary text-center">
            <span className="text-dark">{t("Carnet.title")}</span>{t("Carnet.description")}<br />
            <small>{t('Carnet.reaj')}</small>
        </h4>
<br />
            <h5 className="ubuntu-bold text-uppercase">{t("Carnet.mandatory")}</h5>
<br />
        <h5 className="ubuntu-bold" >
            &euro; 2,50
        </h5>

    <NavLink target="blank_" href="https://p.reaj.com/reaj/subscriptions/recepcion-albergues-reaj">
        <img className="img-fluid carnet" width="200px" src="/carnet.webp" alt="imagen-carnet"/>
    </NavLink>
    
        </div>
    </div>
  )
}
