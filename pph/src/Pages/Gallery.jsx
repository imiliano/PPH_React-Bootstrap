import { Grid } from '../Components/Grid';

export const Gallery = () => {

  return (
  <>

<div className="container-xl">
  <div className="row">

    <Grid clase='my-5 rounded-circle circle-img card-img-top' target={ 'toilet1' } imageName={'H.9'} />
    <Grid clase='my-5 rounded-circle circle-img card-img-top' target={ 'toilet2' } imageName={'H.10'} />
    <Grid clase='my-5 rounded-circle circle-img card-img-top' target={ 'toilet3' } imageName={'H.11'} />
    <Grid clase='my-5 rounded-circle circle-img card-img-top' target={ 'toilet4' } imageName={'H.12'} />
    <Grid target={'rooms1'} imageName={'H.1'} />
    <Grid target={'rooms2'} imageName={'H.2'} />
    <Grid target={'rooms3'} imageName={'H.3'} />
    <Grid target={'rooms4'} imageName={'H.4'} />
    <Grid target={'facilities'} imageName={'H.5'} />
    <Grid target={'facilities'} imageName={'H.6'} />
    <Grid target={'facilities'} imageName={'H.7'} />
    <Grid target={'facilities'} imageName={'H.8'} />

  </div>{/* row */}
</div>{/* container-xl */}

  </>
  )
}
