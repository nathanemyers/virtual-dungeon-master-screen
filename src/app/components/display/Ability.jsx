import React, { Component} from 'react';
import PropTypes from 'prop-types';

import style from 'style/style'

class Ability extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, desc } = this.props

    return (
      <div className={style.ability}>
        <span className={style.bold}>{name}</span>
        <p>{desc}</p>
      </div>
    );
  }
}

Ability.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
}

export default Ability;
