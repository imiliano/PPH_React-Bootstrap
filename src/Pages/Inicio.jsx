import { Button, NavLink } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export const Inicio = () => {
    const [ t ] = useTranslation('global')

  return (
<>

<div className="container-xl mt-5">
    <div className="row">

<div className="col-md-3">
    <img className="rounded img-fluid" src="/Zona_Comun.webp" alt="imagen salon-comedor" />
        <h1 className="text-secondary"> {t('salon.title')} </h1>
            <section className="mb-1 text-uppercase text-primary ubuntu-bold">
                <li>televisión</li> 
                <li> {t('salon.cafe')} </li>  
                <li> {t('salon.vending')} </li> 
                <li> {t('salon.juegos')} </li>
            </section>
</div>

<div className="col-md-3">
    <img className="rounded img-fluid" src="/Habitaciones.webp" alt="imagen habitacion" />
        <h1 className="text-secondary"> {t('habitaciones.title')} </h1>
            <section className="mb-1 text-uppercase text-primary ubuntu-bold">
                <li> {t('habitaciones.beds')} </li>
                <li> {t('habitaciones.taquillas')} </li>
                <li> {t('habitaciones.luz')} </li>
                <li> {t('habitaciones.aire')} </li>
                <li> {t('habitaciones.calefacción')} </li>
            </section>
</div>

<div className="col-md-3">
    <img className="rounded img-fluid" src="/cocina.webp" alt="imagen habitacion" />
        <h1 className="text-secondary"> {t('cocina.title')} </h1>
            <section className="mb-1 text-uppercase text-primary ubuntu-bold">
                <li> {t('cocina.frigo')} </li>
                <li> {t('cocina.freezer')} </li>
                <li> {t('cocina.vitro')} </li>
                <li> {t('cocina.micro')} </li>
                <li> {t('cocina.menaje')} </li>
                <li> {t('cocina.lava')} </li>
                <li> {t('cocina.seca')} </li>
            </section>
</div>

<div className="col-md-3">
    <img className="rounded img-fluid" src="/terraza.webp" alt="imagen terraza" />
        <h1 className="text-secondary"> {t('servicios.title')} </h1>
            <section className="mb-1 text-uppercase text-primary ubuntu-bold">
                <li> wifi </li>
                <li> {t('servicios.terraza')} </li>
                <li> {t('servicios.bici')} </li>
                <li> {t('servicios.cameras')} </li>
                <NavLink href="https://www.palmaportlockers.com">
                <li> {t('servicios.consignas')} </li>
                </NavLink>
            </section>
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
