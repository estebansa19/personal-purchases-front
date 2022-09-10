import { React } from 'react';
import { FillingBottle } from 'react-cssfx-loading';
import '../styles/Loading.css';

export default function Loading() {
  return(
    <div className='loading-container'>
      <FillingBottle width='50px' height='50px' color='#ED623F' />
    </div>
  )
}
