let listOfFerries = ["Carpe diem","Per aspera ad astra","Agnus dei"]

let FairyText = (props) =>{
    <div>{listOfFerries[props.randomNumber]}</div> 
    
}


class Fairy extends React.Component{
   state = { 
    randomNumber : "",
    text : ""

   }
    fairyState = (e) =>{
        this.setState({
            text : e.target.value
        })
    }

    handleClick = () => {
        this.setState({ 
            randomNumber : Math.round(Math.random()*(listOfFerries.length-1))
            })
       
    }
    fairyAdd = () =>{
        listOfFerries.push(this.state.text)
        console.log(listOfFerries)
        this.setState({
            text : ""
        })
    }



    render(){

        return(
           
      <div>     
      <button onClick={this.handleClick}>Zobacz wróżbę</button>
      <div>{this.randomNumber}</div>
      <br />
      <input type="text" value={this.state.text} onChange={this.fairyState} /><button onClick={this.fairyAdd}>Dodaj wróżbę</button>
      <div>{listOfFerries[this.state.randomNumber]}</div>  
      </div>            
                
            
        )
    }
}
ReactDOM.render(<Fairy />, document.getElementById('whiskacz'))