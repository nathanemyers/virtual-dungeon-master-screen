import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { getAllSpells, getFilteredSpells } from 'app/redux/selectors/spells'
import { getAllMonsters, getFilteredMonsters } from 'app/redux/selectors/monsters'
import { getSearchTerm, getMinSearch } from 'app/redux/selectors/ui'

import { update_search } from 'app/redux/actions/ui'

import SpellCard from 'app/components/cards/SpellCard'
import MonsterCard from 'app/components/cards/MonsterCard'
import { Input, Card, Container } from 'semantic-ui-react'

import style from 'style/style'

@connect(
  (state, ownProps) => ({
    spells: getAllSpells(state),
    monsters: getAllMonsters(state),
    filtered_spells: getFilteredSpells(state),
    filtered_monsters: getFilteredMonsters(state),
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
      monsters, 
      filtered_spells, 
      filtered_monsters, 
      update_search, 
      search_term,
      min_search,
    } = this.props

    let spell_cards = [] 
    if (search_term.length > 0) {
      spell_cards = filtered_spells.map((spell, index) => {
        return <SpellCard key={index} spell={spell} search={search_term}/>
      })
    }

    let monster_cards = [] 
    if (search_term.length > 0) {
      monster_cards = filtered_monsters.map((monster, index) => {
        return <MonsterCard key={index} monster={monster} search={search_term}/>
      })
    }


    function onChange(event, data) {
      update_search(data.value)
    }

    const insuffiecient_search =  (search_term.length !== 0) && (search_term.length <= min_search)

    return (
      <Container>
        <Container className={style.search}>
          <Input 
            fluid 
            placeholder="Search Spells..."
            icon="search" 
            iconPosition="left"
            onChange={onChange} 
          />
        </Container>
        { insuffiecient_search ?
            <div>
              Search begins at {min_search} characters
            </div>
            :
            <Card.Group itemsPerRow={3} stackable={true} doubling={true}>
              { spell_cards }
              { monster_cards }
            </Card.Group>
        }
      </Container>
    );
  }
}

export default App;
