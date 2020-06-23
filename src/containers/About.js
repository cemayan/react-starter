import React from 'react';
import ReactDOM from 'react-dom';


class About extends React.Component {
    render() {
        return <h1>About, {this.props.name}</h1>;
    }
}

export default About;
