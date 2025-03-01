import { Navigate, Route, Routes } from 'react-router-dom';
import { HostelApp } from '../../HostelApp';
import { Inicio } from '../Pages/Inicio';
import { Gallery } from '../Pages/Gallery';
import { Contact } from '../Pages/Contact';
import { Carnet } from '../Pages/Carnet';

export const AppRouter = () => {
  return (
    <>
    
    <Routes>

    <Route path='galeria' element={ <Gallery /> } />
    <Route path='contacto' element={ <Contact /> } />
    <Route path='carnet' element={ <Carnet /> } />
    <Route path='/' element={ <Inicio /> } />

    <Route path='./*' element={ <Navigate to={ HostelApp } />  } />

    </Routes>
    
    </>
  )
}
