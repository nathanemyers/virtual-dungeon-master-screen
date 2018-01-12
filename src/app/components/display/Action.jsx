import React, { Component} from 'react';
import PropTypes from 'prop-types';

import style from 'style/style'

class Action extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, desc } = this.props

    return (
      <div>
        <span className={style.bold}>{name}</span>
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
