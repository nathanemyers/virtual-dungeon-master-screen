import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Action extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, desc } = this.props

    return (
      <div>
        <strong>{name}</strong>
        <p>{desc}</p>
      </div>
    );
  }
}

Action.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  attack_bonus: PropTypes.string,
  damage_dice: PropTypes.string,
  damage_bonus: PropTypes.string,
}

export default Action;
