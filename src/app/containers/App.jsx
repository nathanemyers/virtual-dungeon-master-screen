import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { getAllSpells } from 'app/redux/selectors/spells'
import { fetchSpells } from 'app/redux/actions/spells'

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

    return (
      <div>
        Hail Dungeon Master
      </div>
    );
  }
}

App.propTypes = {
}

export default App;
