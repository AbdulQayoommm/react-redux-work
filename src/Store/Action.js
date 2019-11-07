function changeData (data){
    console.log(data)
    return{
        type:"text",
        data:data

    }
}

function increment  () {
    return{
        type:"INCREMENT"
    }
  }

 function decrement  ()  {
     return{
        type:"DECREMENT"
     }
  }

  export {
    changeData,
    increment,
    decrement
}