import { Navbar, Nav, NavbarToggle } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const Navegacion = () => {
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
    > Galeria
    </NavLink>

    <NavLink
    to={ 'contacto'} 
    className="text-uppercase text-decoration-none fs-5 mx-2"
    > Contacto
    </NavLink>

    <NavLink
    to={ 'carnet' }
    className="text-uppercase text-decoration-none fs-5 mx-2"
    > Carnet Alberguista
    </NavLink>

    <NavLink 
    target="blank_"
    className="text-uppercase text-decoration-none fs-5 mx-2"
    to={`https://booking.avirato.com/?code=6818963`} 
    > Reserva
    </NavLink>
</Nav>

    </Navbar.Collapse>

</Navbar>
    </div>
  )
}
