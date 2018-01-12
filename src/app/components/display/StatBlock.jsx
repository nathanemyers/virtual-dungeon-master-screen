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
        <ul className={style.statblock}>
          <li><span className={style.bold}>STR:</span> {str} ({str_mod})</li>
          <li><span className={style.bold}>DEX:</span> {dex} ({dex_mod})</li>
          <li><span className={style.bold}>CON:</span> {con} ({con_mod})</li>
          <li><span className={style.bold}>INT:</span> {int} ({int_mod})</li>
          <li><span className={style.bold}>WIS:</span> {wis} ({wis_mod})</li>
          <li><span className={style.bold}>CHA:</span> {cha} ({cha_mod})</li>
        </ul>
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
