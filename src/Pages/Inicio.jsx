import { Button } from 'react-bootstrap';

export const Inicio = () => {
  return (
<>

<div className="container-xl mt-5">
    <div className="row">

<div className="col-md-3">
    <img className="rounded img-fluid" src="/Zona_Comun.webp" alt="imagen salon-comedor" />
        <h1 className="text-secondary">salón, comedor</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                <li>televisión</li> 
                <li>máquina de café</li>  
                <li>máquina vending </li> 
                <li>juegos de mesa</li>
            </p>
</div>

<div className="col-md-3">
    <img className="rounded img-fluid" src="/Habitaciones.webp" alt="imagen habitacion" />
        <h1 className="text-secondary">habitaciones</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                <li>10, 8, 6 y 4 camas por habitación</li>
                <li>taquillas individuales</li>
                <li>luz, enchufe y balda</li>
                <li>aire acondicionado y calefacción</li>
                <li>calefacción</li>
            </p>
</div>

<div className="col-md-3">
    <img className="rounded img-fluid" src="/cocina.webp" alt="imagen habitacion" />
        <h1 className="text-secondary">cocina</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                <li>frigorífico</li>
                <li>congelador</li>
                <li>vitrocerámica</li>
                <li>microóndas</li>
                <li>menaje de cocina</li>
                <li>lavadora</li>
                <li>secadora</li>
            </p>
</div>

<div className="col-md-3">
    <img className="rounded img-fluid" src="/terraza.webp" alt="imagen terraza" />
        <h1 className="text-secondary">servicios adicionales</h1>
            <p className="text-uppercase text-primary ubuntu-bold">
                <li>terraza</li>
                <li>wifi gratuito</li>
                <li>parking de bicicletas</li>
                <li>cámaras de seguridad</li>
                <li><a className="text-decoration-none" href="https://www.palmaportlockers.com">servicio de consignas</a> (de pago)</li>
            </p>
</div>

    </div>
</div>

<div className="center-class my-5 ">
    <Button className="ubuntu-bold text-uppercase buton" target="blank_" variant="outline-dark" href="https://booking.avirato.com/?code=6818963">
        Booking
    </Button>
</div>

</>
  )
}
