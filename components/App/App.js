import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavMenu from '../NavMenu/NavMenu';
import Content from '../Content/Content';
import Contacts from '../Contacts/Contacts';


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
                <Route path="/contacts" component={Contacts} />
            </Router>                     
        );
    }
}

export default App;