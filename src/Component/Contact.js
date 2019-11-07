import React from 'react';
// import {connect} from 'react-redux';

class Contact extends React.Component{
    render(){
        console.log("Reduc Data on Contact Page ===>", this.props)
        return(
        <div>

        </div>
        )
    }
}

// const mapStateToProps = state=>{
//     return{
//         name : state.name,
//         age : 20
//     }
// }

export default Contact
// export default connect(mapStateToProps,null)(Contact)