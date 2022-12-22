import { Link } from "react-router-dom";
/** 
 the LINK router component allows rendering 
 without an extra server request ala: routing
*/
import cssClasses from "./MainNavigation.module.css";
/**
 * Allows defining css PER COMPONENT.
 * helps for
 * clarity, especially in big projects
 */
function MainNavigation() {
  return (
    <header className={cssClasses.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">new meetups</Link>
          </li>
          <li>
            <Link to="/favorites">favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
