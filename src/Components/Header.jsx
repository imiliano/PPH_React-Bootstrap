import { Alert } from 'react-bootstrap';
import { Navegacion } from './Navegacion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';


export const Header = () => {
      const [ t ] = useTranslation('global');

  return (
    <>
    
    <Navegacion />

    <Alert className="ubuntu-bold fs-5 text-center" variant="info">
      <NavLink className='text-decoration-none' to={ 'carnet' }>
    {t("Carnet.mandatory")}
      </NavLink>
    </Alert>

    </>
  )
}
