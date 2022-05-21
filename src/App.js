import './App.css';
import React ,{Component} from "react"

class App extends Component{
state={
person : {
fullName : " khemiri ons " ,
bio : " hello everyone ",
profession : " student " ,
imgSrc : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
},
shows: true,
};
  change = () =>
    this.setState(this.state.shows ? { shows: false } : { shows: true });
componentDidMount(){
  console.log("heyyyyyy");
}
componentDidUpdate(){
  console.log("uppddaatttee")
}
componentWillUnmount(){
  console.log("byyyyeee")
}
render() {
  return(
    <div>
      <h1 style={{border:"5px dotted blue" ,textAlign:"center",fontFamily:"cursive"}}>React-state-workshop</h1>
     <br/>
     <button onClick={this.change}>click here</button>
     <br/>
     {this.state.shows?
      this.state.person.fullName +this.state.person.bio+this.state.person.profession :null}
      <br/>
      {this.state.shows?
      <img src={this.state.person.imgSrc} alt="person"></img> :null}
    </div>
  )
}
}
export default App