import React ,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './styles.scss';
const data =[
    {
        label:'HOME',
        to:'/'
    },
    {
        label:'ABOUT ME',
        to:'/about'
    },
    {
        label:'RESUME',
        to:'/resume'
    },
    {
        label:'SKILLS',
        to:'/skills'
    },
    
    {
        label:'CONTACT',
        to:'/contact'
    },

   
]


const NavBar=()=>{
    const[toggleIcon,setToggleIcon]=useState(false);

    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon);
       
    };
    return(
        <div>
            <nav className="navBar">
<ul className = {`navbar_container_menu ${toggleIcon ? "active" :""} `}>
    {
        data.map((item, key)=>(
<li key={key} className="navbar_container_menu_item">
    <Link className="navbar_container_menu_item_links"  to={item.to}>
        {item.label}
    </Link>
</li>
        ))
    }
</ul>
<div className="nav_icon" onClick={handleToggleIcon}>
    {
        toggleIcon ? <HiX size={30}/> : <FaBars size={30} />
    }

</div>
            </nav>

        </div>
    )
}
export default NavBar;
