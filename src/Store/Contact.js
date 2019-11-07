import React from 'react'
import {Link } from 'react-router-dom';
import {connect} from 'react-redux'
class Contact extends React.Component{
    render(){
        console.log("Contact Data ===>", this.props.name)
        return(
            <div>
                <center>
                <h1>Contact Page</h1>
                <h3>{this.props.name}</h3>
                <Link to = "/">Go To Home Page</Link>
                </center>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        name : state.name
    }
    }
    export default connect(mapStateToProps,null)(Contact)