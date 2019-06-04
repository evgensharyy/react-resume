import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../Menu/Menu';
import Content from '../Content/Content';


function Header() {
    return (
        <Navbar />
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){
        return (
            <Router>
                <Header />
                <Content /> 
            </Router>                     
        );
    }
}

export default App;