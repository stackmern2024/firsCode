import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        {title:'home', link:'/'},
        {title:'servics', link:'/servics'},
        {title:'blog', link:'/blog'},
        {title:'contact', link:'/contact'}
    ]
    return (
        <div>
            {
                navItems.map((item)=>(
                    <Link to={item.link} className='mr-4' key={item.link}>{item.title}</Link>
                ))
            }
        </div>
    );
};

export default Navbar;