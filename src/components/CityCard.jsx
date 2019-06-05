import React, { Component, PropTypes } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cardContents = (
            <div className='wrapper'>
              <div className='inner-header-div'>
                <h2> {this.props.LocationText} </h2>
              </div>
              <div className='inner-card-div'>
            <ul>
              <li>
                Location: ({this.props.Long+","+this.props.Lat})
              </li>
            <li>{this.props.EstimatedPopulation} </li>
            <li>{this.props.TotalWages}</li>
            </ul>
              </div>
            </div>
        );
        return cardContents;
    }
}

export default Card;
