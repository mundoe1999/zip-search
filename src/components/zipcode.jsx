import React, { Component } from "react";

class CityCard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.props.location}
        <br/>
        {this.props.coordinates}
        <br/>
        {this.props.population}
        <br/>
        {this.props.wages}
        <br/>
        <br/>
      </div>
    )
  }
}



class ZipCodeFetch extends Component{
  constructor(props){
    super(props);
    this.state = {
      zipAddress: "10012",
      json: NaN
    }
    this.ChangeZip = this.ChangeZip.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    //Get The address
    let address = 'http://ctp-zip-api.herokuapp.com/zip/'+this.state.zipAddress;
    console.log(address);
    fetch(address)
    .then(response => response.json())
    .then(myJson => this.setState({json: JSON.parse((JSON.stringify(myJson)))}));
  }

  render(){
    let objArray = this.state.json || [];
    return(
      <div className = "CardContainer"> 
      <input type='text' value={this.state.zipAddress} onChange={this.ChangeZip} onKeyPress={this.handleKeyPress}/>
        {
          objArray.map(item => {
            return(
              <CityCard location={item["LocationText"]} coordinates={item["Long"] + " " + item["Lat"]} 
              population={item["EstimatedPopulation"]} wages={item["TotalWages"]} />
            )
          })
        }

      </div>
    )
  }

  ChangeZip(event){
    this.setState({
      zipAddress: event.target.value
    });


  }

  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
      this.componentDidMount();
    }
  }
};

export default ZipCodeFetch;

