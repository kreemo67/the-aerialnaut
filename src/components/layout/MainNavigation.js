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
      <div>
        <Link to="/">The Aerialnaut</Link>
      </div>
      <nav>
        <ul>
          <li></li>
          <li>
            <Link to="/aerial-background">Aerial Background</Link>
          </li>
          <li>
            <Link to="/haunt-background">Haunt Background</Link>
          </li>
          <li>
            <Link to="/current-projects">Current Projects</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
