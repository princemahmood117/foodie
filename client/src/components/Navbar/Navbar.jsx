import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'
const Navbar = () => {

    const [menu,setMenu] = useState("Home") 
    return (
        <div className='nav'>
            {/* <img className='logo' src={assets.logo} alt="navbar_logo" /> */}
            <h1 className='text-4xl font-bold text-orange-700'>Foodie...</h1>
            <ul className='navbar-manu'>
                <li onClick={()=> setMenu("Home")} className={menu === 'Home'? 'active' : ""}>Home</li>
                <li onClick={()=> setMenu("Menu")} className={menu === 'Menu'? 'active' : ""}>Menu</li>
                <li onClick={()=> setMenu("Mobile-app")} className={menu === 'Mobile-app'? 'active' : ""}>Mobile-app</li>
                <li onClick={()=> setMenu("Contact")} className={menu === 'Contact'? 'active' : ""}>Contact</li>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="basket_icon" />
                    <div className='dot'></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;