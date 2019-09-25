import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';

class Books extends Component {
    static contextType = ThemeContext

    render() { 
        const { isLightTheme, light, dark} = this.context
        const theme = isLightTheme ? light : dark
        return ( 
            <div className='book-list'>
                <ul style= {{background:theme.bg, color:theme.syntax}}>
                    <li style = {{background:theme.ui}}>the way of kings</li>
                    <li style = {{background:theme.ui}}>the final empire</li>
                    <li style = {{background:theme.ui}}>the name of winds</li>
                </ul>
            </div>
         );
    }
}
 
export default Books;