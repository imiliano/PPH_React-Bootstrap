import Proptypes from 'prop-types';


export const Grid = ({ imageName='', clase ='my-2 rounded card-img-top' }) => {
  return (
<div className='col-md-3 my-2'>

    <img 
        src={`/${ imageName }.webp`} 
        alt={ imageName } 
        className={clase}
    />
    
</div> /* col-md-4 */
  )
}

Grid.propTypes = {
    imageName: Proptypes.string,
    clase: Proptypes.string,
  }