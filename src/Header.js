import profile from './img/profile.png'
import wishlist from './img/wishlist.png'
import baglogo from './img/bag.png'
import { NavLink } from 'react-router-dom';



function Header({user,bag}){

    return(
        <header className = "container">
        <nav className = "flex space-between">
          <div className = "left flex items-center">
           <NavLink to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png" /></NavLink>
            <ul className = "flex uppercase semibold">
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Studio</li>
            </ul>
          </div>
          <div className = "right flex items-center">
            <input className = "search" placeholder="Search for products, brands and more" value="" data-reactid="894"/>
            <div className = "rightBox space-around">
              <NavLink to="/login"> 
               
               <div className = "profile" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
               <img  src = {profile}/>
                <div > { user?.email?.slice(0,7)}</div>
              </div>
              </NavLink>
              <NavLink to="/bag">
               <div className = "profile" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img  src = {baglogo}/>
                <div>{bag?.length}</div>
                </div>
                </NavLink>  
             <NavLink to="/" > <img  src = {wishlist}/></NavLink>

            </div>
          </div>
        </nav>
      </header>
    )
}
export default Header;