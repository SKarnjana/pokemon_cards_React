import React, { Component } from "react";
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    return (
      <div className='Pokecard'>
        <h1>{this.props.name}</h1>
        <img 
          alt={this.props.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} 
        />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    )
    
  }
}

export default Pokecard;