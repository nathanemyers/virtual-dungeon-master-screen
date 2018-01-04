import React, { Component} from 'react';
import PropTypes from 'prop-types';

import style from 'style/style'

class StatBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { str, dex, con, int, wis, cha } = this.props

    function calc_mod(stat) {
      return Math.floor((stat - 10) / 2)
    }

    const str_mod = calc_mod(str)
    const dex_mod = calc_mod(dex)
    const con_mod = calc_mod(con)
    const int_mod = calc_mod(int)
    const wis_mod = calc_mod(wis)
    const cha_mod = calc_mod(cha)

    return (
      <div className={style.stats}>
        <ul>
          <li>STR: {str} ({str_mod})</li>
          <li>DEX: {dex} ({dex_mod})</li>
          <li>CON: {con} ({con_mod})</li>
          <li>INT: {int} ({int_mod})</li>
          <li>WIS: {wis} ({wis_mod})</li>
          <li>CHA: {cha} ({cha_mod})</li>
        </ul>
      </div>
    );
  }
}

StatBlock.propTypes = {
  str: PropTypes.number.isRequired,
  dex: PropTypes.number.isRequired,
  con: PropTypes.number.isRequired,
  int: PropTypes.number.isRequired,
  wis: PropTypes.number.isRequired,
  cha: PropTypes.number.isRequired,
}

export default StatBlock;
