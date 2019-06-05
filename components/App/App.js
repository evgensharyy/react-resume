import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavMenu from '../NavMenu/NavMenu';
import Content from '../Content/Content';


function Header() {
    return (
        <NavMenu />
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
                <Route path="/" exact component={Content} /> 
            </Router>                     
        );
    }
}

export default App;