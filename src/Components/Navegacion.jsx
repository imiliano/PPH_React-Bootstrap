import { Navbar, Nav, NavbarToggle } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

export const Navegacion = () => {
    const [ t ] = useTranslation('global')

  return (
    <div className="center-class">
    <NavLink
    className="text-decoration-none m-2" to={ '/' } >
        <img className="img-fluid" width={170} src="/icon.png" alt="icon"/>
    </NavLink>

<Navbar className="center-class mt-2" collapseOnSelect expand='md'>
        <NavbarToggle className="mb-3" />
    <Navbar.Collapse>
                
<Nav className="ubuntu-bold text-center d-flex flex-md-row justify-content-md-between">

    <NavLink
    className={ ({ isActive }) => `text-uppercase text-decoration-none fs-5 mx-2 ${ isActive ? 'active' : ''}` }
    to={ 'galeria' }
    > {t('Navegacion.galeria')}
    </NavLink>

    <NavLink
    to={ 'contacto'} 
    className="text-uppercase text-decoration-none fs-5 mx-2"
    > {t('Navegacion.contacto')}
    </NavLink>

    <NavLink
    to={ 'carnet' }
    className="text-uppercase text-decoration-none fs-5 mx-2"
    > {t('Navegacion.carnet')}
    </NavLink>

    <NavLink 
    target="blank_"
    className="text-uppercase text-decoration-none fs-5 mx-2"
    to={`https://booking.avirato.com/?code=6818963`} 
    > {t('Navegacion.reserva')}
    </NavLink>
</Nav>

    </Navbar.Collapse>

</Navbar>
    </div>
  )
}
