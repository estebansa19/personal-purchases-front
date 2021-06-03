import { React } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/purchases' className='navbar-brand font-weight-bold'>Lista de gastos</Link>

        <button 
          className='navbar-toggler' 
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#purchasesNavbar' 
          aria-controls='purchasesNavbar' 
          aria-expanded='false' 
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='purchasesNavbar'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' >
                Crear registro de gasto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
