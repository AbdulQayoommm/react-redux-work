import React from "react";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";


export default class RouterPage extends React.Component{
    render(){
        return(
            <div>
        <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Router>
            </div>
        )
    }
}