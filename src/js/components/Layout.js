import React from 'react'
import './styles.scss'

const Layout = ({children}) => (
    <div>
        <nav className="navbar">
            <span className="navbar-brand mb-0">TMDB</span>
        </nav>
        <div className='container'>
            {children}
        </div>
    </div>
)

export default Layout