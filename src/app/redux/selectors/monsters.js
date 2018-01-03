import { createSelector } from 'reselect'
import { getSearchTerm, getMinSearch } from 'app/redux/selectors/ui'

export const getAllMonsters = (state) => state.monsters.monsters

export const getFilteredMonsters = createSelector(
  getAllMonsters,
  getSearchTerm,
  getMinSearch,
  (monsters, key_search, min_search) => monsters.filter(monster => monster_match(monster, key_search, min_search))
)

// Returns true if the monster contains the keyword
const monster_match = (monster, keyword, min_search) => {
  // kick in at 3 chars
  if (keyword.length <= min_search) {
    // for performance reasons we return nothing at low chars, 
    // the Highlighter (https://github.com/bvaughn/react-highlight-words)
    // can be super slow
    return false 
  }
  const { name } = monster
  const regex = new RegExp(keyword, 'i')
  return name.match(regex)
}
