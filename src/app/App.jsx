import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { getAllSpells, getFilteredSpells } from 'app/redux/selectors/spells'
import { getSearchTerm, getMinSearch } from 'app/redux/selectors/ui'

import { update_search } from 'app/redux/actions/ui'

import SpellCard from 'app/components/cards/SpellCard'
import { Input, Card, Container } from 'semantic-ui-react'

//import styles from 'style/style'

@connect(
  (state, ownProps) => ({
    spells: getAllSpells(state),
    filtered_spells: getFilteredSpells(state),
    search_term: getSearchTerm(state),
    min_search: getMinSearch(state),
  }),
  (dispatch, ownProps) => ({
    update_search: (search) => dispatch(update_search(search)),
  })
)
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      spells, 
      filtered_spells, 
      update_search, 
      search_term,
      min_search,
    } = this.props

    let spell_cards = [] 
    if (search_term.length === 0) {
      spell_cards = spells.map((spell, index) => {
        return <SpellCard key={index} spell={spell}/>
      })
    } else {
      spell_cards = filtered_spells.map((spell, index) => {
        return <SpellCard key={index} spell={spell} search={search_term}/>
      })
    }

    function onChange(event, data) {
      update_search(data.value)
    }

    const insuffiecient_search =  (search_term.length !== 0) && (search_term.length <= min_search)

    return (
      <Container>
        <Container>
          <Input fluid onChange={onChange} />
        </Container>
        { insuffiecient_search ?
            <div>
              Search begins at {min_search} characters
            </div>
            :
            <Card.Group itemsPerRow={3} stackable={true} doubling={true}>
              { spell_cards }
            </Card.Group>
        }
      </Container>
    );
  }
}

export default App;
