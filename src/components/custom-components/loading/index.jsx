import loading from '../../assets/images/loader.gif';


export default function Loading() {
  return (
    <div className='loading-section'>
      <figure className='loading-logo'>
         <img src={loading} alt="loading.gif" />
      </figure>
    </div>
  )
}
