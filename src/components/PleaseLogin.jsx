import React from 'react';
import { NavLink } from 'react-router-dom';

const PleaseLogin = () => {
   return (
       <h1>Please <NavLink to="/">Login</NavLink> to continue</h1>
   )
}

export default PleaseLogin;