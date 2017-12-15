import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { getAllSpells } from 'app/redux/selectors/spells'
import { fetchSpells } from 'app/redux/actions/spells'

import SpellCard from 'app/components/cards/SpellCard'

@connect(
  (state, ownProps) => ({
    spells: getAllSpells(state),
  }),
  (dispatch, ownProps) => ({
  })
)
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spells } = this.props

    const spell_cards = spells.map((spell) => {
      return <SpellCard spell={spell}/>
    })

    return (
      <div>
        Hail Dungeon Master
        { spell_cards }
      </div>
    );
  }
}

App.propTypes = {
}

export default App;
