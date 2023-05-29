import React, { Component } from "react";
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    return (
      <div className='Pokecard'>
        <div className='Pokecard-content'>
          <h1>{this.props.name}</h1>
          <img 
            className='Pokecard-img'
            alt={this.props.name}
            src={`${POKE_API}${padToThree(this.props.id)}.png`} 
          />
          <div className='Pokecard-detail'>Type: {this.props.type}</div>
          <div className='Pokecard-detail'>EXP: {this.props.exp}</div>
        </div>
      </div>
    )
    
  }
}

export default Pokecard;