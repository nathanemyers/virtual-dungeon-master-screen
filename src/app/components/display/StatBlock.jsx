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
      let mod = Math.floor((stat - 10) / 2)
      return (mod > 0) ? `+${mod}` : `${mod}`
    }

    const str_mod = calc_mod(str)
    const dex_mod = calc_mod(dex)
    const con_mod = calc_mod(con)
    const int_mod = calc_mod(int)
    const wis_mod = calc_mod(wis)
    const cha_mod = calc_mod(cha)

    return (
      <div className={style.statblock}>
        <ul>
          <li><strong>STR:</strong> {str} ({str_mod})</li>
          <li><strong>DEX:</strong> {dex} ({dex_mod})</li>
          <li><strong>CON:</strong> {con} ({con_mod})</li>
        </ul>
        <ul>
          <li><strong>INT:</strong> {int} ({int_mod})</li>
          <li><strong>WIS:</strong> {wis} ({wis_mod})</li>
          <li><strong>CHA:</strong> {cha} ({cha_mod})</li>
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
