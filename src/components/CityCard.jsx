import React, { Component, PropTypes } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cardContents = (
            <div className='wrapper'>
              <div className='inner-header-div'>
                <h2> {this.props.location} </h2>
              </div>
              <div className='inner-card-div'>
            <ul>
              <li>
                Location: ({this.props.coordinates})
              </li>
            <li>{this.props.population} </li>
            <li>{this.props.wages}</li>
            </ul>
              </div>
            </div>
        );
        return cardContents;
    }
}

export default Card;
