import React, { Component} from 'react';
import PropTypes from 'prop-types';

class SpellCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spell } = this.props

    return (
      <div className="spell-card">
        <h4>
          {spell.name} 
          <small>
            (Level: {spell.level})
          </small>
        </h4>
        <p className="spell-description">{spell.description}</p>
        
      </div>
    );
  }
}

SpellCard.propTypes = {
  spell: PropTypes.object.isRequired,
}

export default SpellCard;
