import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router';

import classes from './Header.module.css';

function Header(){
    return(
        <div>
        <header className={classes.header}>
            <div className={classes.logo}><i class="fas fa-code"></i> Code to React</div>
            <nav>
                <ul>
                    <li><NavLink exact to='/' activeClassName={classes.html_active}><i class="fab fa-html5"></i> Html </NavLink></li> 
                    <li><NavLink exact to='/css' activeClassName={classes.css_active}><i class="fab fa-css3"></i> Css </NavLink></li>
                    <li><NavLink exact to='/js' activeClassName={classes.js_active}><i class="fab fa-js"></i> Js </NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
    );
}

export default withRouter(Header);