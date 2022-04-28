import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-default'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <a href='#' className='navbar-brand'>
                        TO DO LISTS
                    </a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar