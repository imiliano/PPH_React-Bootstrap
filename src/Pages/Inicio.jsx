export const Inicio = () => {
  return (
<>

<div className="container-xl mt-5">
    <div className="row">

<div className="col-md-3">
    <img className="circle-img rounded img-fluid" src="/Zona_Comun.webp" alt="imagen salon-comedor" />
        <h1 className="text-secondary">salón, comedor</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                televisión <br />
                máquina de café  <br />
                máquina vending  <br />
                juegos de mesa
            </p>
</div>

<div className="col-md-3">
    <img className="circle-img rounded img-fluid" src="/Habitaciones.webp" alt="imagen habitacion" />
        <h1 className="text-secondary">habitaciones</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                10, 8, 6 y 4 camas por habitación <br />
                taquillas individuales <br />
                luz, enchufe y balda <br />
                aire acondicionado y calefacción
            </p>
</div>

<div className="col-md-3">
    <img className="circle-img rounded img-fluid" src="/cocina.webp" alt="imagen habitacion" />
        <h1 className="text-secondary">cocina</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                frigorífico <br />
                congelador <br />
                vitrocerámica <br />
                microóndas <br />
                menaje de cocina <br />
                lavadora <br />
                secadora
            </p>
</div>

<div className="col-md-3">
    <img className="circle-img rounded img-fluid" src="/terraza.webp" alt="imagen terraza" />
        <h1 className="text-secondary">servicios adicionales</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                terraza <br />
                wifi gratuito <br />
                parking de bicicletas <br />
                cámaras de seguridad <br />
                <a className="text-decoration-none" href="https://www.palmaportlockers.com">servicio de consignas</a> (de pago)
            </p>
</div>

    </div>
</div>


<div className="center-class my-5 ubuntu-bold">
    <a target="blank_" id="no-scale-hover" href="https://booking.avirato.com/?code=6818963" className="text-uppercase text-center text-decoration-none btn btn-lg btn-outline-dark ">
        Booking
    </a>
</div>

</>
  )
}
