
export const Carnet = () => {
  return (
    <>

<div className="container-xl my-5 border-top border-bottom">
    <div className="center-class">
        <h2 className="fw-bold text-dark text-secondary">
            Carnet Alberguista
        </h2>
        <br/>
        <h3 className="ubuntu-bold text-secondary">
            El Carnet de Alberguista es un requisito imprescindible para acceder a cualquier albergue REAJ <br /> (Red Española de Albergues Juveniles)
        </h3>
<br />
            <h4 className="ubuntu-bold text-uppercase text-dark center-class">Obligatorio para mayores de 30 años</h4>
<br />
        <h4 className="ubuntu-bold" >
            &euro; 2,50
        </h4>

        <a target="blank_" className="text-decoration-none mt-3" href="https://p.reaj.com/reaj/subscriptions/recepcion-albergues-reaj">
            <img className="img-fluid carnet" width="250px" src="/carnet.webp" alt="imagen-carnet"/>
        </a>
        </div> 
    </div>

    </>
  )
}
