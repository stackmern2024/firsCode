import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Servics = () => {
    return (
        <div>
            <h1>Servics Area</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero saepe deserunt dolor beatae ex amet a inventore facilis?</p>
            <div className='space-x-5 mt-5'>
                <Link   to={'/servics1'}>servics 1</Link>
                <Link to={'/servics2'}>servics 2</Link>
                <Link to={'/servics3'}>servics 3</Link>
                <Link to={'/servics4'}>servics 4</Link>
                <Link to={'/servics5'}>servics 5</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Servics;