import { createSelector } from 'reselect'
import { getSearchTerm, getMinSearch } from 'app/redux/selectors/ui'

export const getAllSpells = (state) => state.spells.spells

export const getFilteredSpells = createSelector(
  getAllSpells,
  getSearchTerm,
  getMinSearch,
  (spells, key_search, min_search) => spells.filter(spell => spell_match(spell, key_search, min_search))
)

// Returns true if the spell contains the keyword
const spell_match = (spell, keyword, min_search) => {
  // kick in at 3 chars
  if (keyword.length <= min_search) {
    // for performance reasons we return nothing at low chars, 
    // the Highlighter (https://github.com/bvaughn/react-highlight-words)
    // can be super slow
    return false 
  }
  const { name, description } = spell
  const regex = new RegExp(keyword, 'i')
  return name.match(regex) || description.match(regex)
}
