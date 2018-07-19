import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/nav.css';

class Navbar extends React.Component {
    render(){
        return (
            <nav className={this.props.className}>
                <ul>
                    <li><NavLink to="/" style={{color:this.props.color}} activeClassName="active" exact>Home</NavLink></li><p>|</p>
                    <li><NavLink to="/about" style={{color:this.props.color}} activeClassName="active">About</NavLink></li><p>|</p>
                    <li><NavLink to="/projects" style={{color:this.props.color}} activeClassName="active">Projects</NavLink></li><p>|</p>
                    <li><NavLink to="/contact" style={{color:this.props.color}} activeClassName="active">Get connected</NavLink></li> 
                </ul>
            </nav>
        );
    }
}

export default Navbar;