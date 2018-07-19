import React from 'react';
import './styles/projects.css';
import Navbar from './nav';

class Projects extends React.Component {
    render(){
        return (
        <div className="project-wrapper">
            <div className="project-header">
                <h1>Projects</h1>
                <Navbar className="menu-project" color="white" />
            </div>
            <div className="project-content">
                <div className="project1">
                    <div className="image1"></div>
                    <div className="para1"></div>
                </div>
                <div className="project2">
                    <div className="image2"></div>
                    <div className="para2"></div>
                </div>
            </div>
        </div>
        );
    }
}

export default Projects;