import { NavLink } from "react-bootstrap"

export const Carnet = () => {
  return (
<div className="container-xl my-4">
    <div className="center-class">
<br/>
        <h4 className="ubuntu-bold text-secondary text-center">
            <span className="text-dark">El Carnet de Alberguista</span> es un requisito imprescindible para acceder a cualquier albergue REAJ
            <br />
            <small>(Red Española de Albergues Juveniles)</small>
        </h4>
<br />
            <h5 className="ubuntu-bold text-uppercase">Obligatorio para mayores de 30 años</h5>
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
