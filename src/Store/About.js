import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
class About extends React.Component{
    render(){
        console.log("About Data ===>",this.props.name)
        return(
            <div>
                <center>
                <h1>About Page</h1>
                <h3>
                {this.props.name}
                </h3>
                <Link to = "/contact">Go To Contact Page</Link>
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
    export default connect(mapStateToProps,null)(About)