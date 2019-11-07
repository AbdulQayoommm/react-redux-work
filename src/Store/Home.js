import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeData,increment,decrement } from './Action'
// import { stat } from 'fs'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
        data:""
        }
    }
  
    render(){
        console.log(this.state.data)
        console.log("Home Data ===>", this.props.name)
        return(
            <div>
        <center>
                <h1>Home Page</h1>
                <h3>{this.props.name}</h3>
                <Link to = "/about">Go to About</Link><br />
                 <input onChange={(e)=>this.setState({data:e.target.value})} />

                <button onClick = {()=>this.props.changeData(this.state.data)}>Add data</button><br />


                <h3>{this.props.count}</h3>
                <button onClick = {()=>this.props.increment()}>Increment Data</button>
                <button onClick = {()=>this.props.decrement()}>Decrement Data</button>

        </center>
            </div>
        )
    }
}
// const mapStateToProps = state =>{
// return{
//     name : state.name
// }
// }

function mapStateToProps(state) {
    return {
      count: state.count,
      name:state.name,
      data:state.array
    };
  }

const mapDispatchToProps = dispatch => {
return {
    changeData : (name1) => dispatch(changeData(name1)),
    increment:(val)=> dispatch(increment()),
    decrement:(val)=>dispatch(decrement()),

    
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
