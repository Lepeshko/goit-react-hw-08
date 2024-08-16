import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css'

export default function AuthNav() {
 return (
   <div className={css.authNav}>
     <NavLink
       to="/register"
       className={({ isActive }) =>
         isActive ? `${css.link} ${css.active}` : css.link
       }
     >
       Register
     </NavLink>
     <NavLink
       to="/login"
       className={({ isActive }) =>
         isActive ? `${css.link} ${css.active}` : css.link
       }
     >
       Log In
     </NavLink>
   </div>
 );
}