import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';

class NavBar extends Component {
    render() { 
        <ThemeContext.Consumer> {(context) => {
            const {isLightTheme, light, dark} = this.context;
            const theme = isLightTheme ? light : dark        
            return ( 
                <nav style={{ background:theme.ui, color:theme.syntax}}>
                    <h1>Contact App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
             );
        }}
         
        </ThemeContext.Consumer>
       
    }
}
 
export default NavBar;