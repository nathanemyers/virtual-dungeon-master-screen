import { SPELL_API } from 'app/api'

const spellsRequest = (params) => ({
  type: 'SPELLS_REQUEST',
  params,
});

const spellsResponse = (data) => ({
  type: 'SPELLS_SUCCESS',
  spells: data,
});

const spellsError = (error) => ({
  type: 'SPELLS_ERROR',
  error: error,
});

export const fetchSpells = (params) => {
  return (dispatch, getState) => {
    dispatch(spellsRequest(params));

    return fetch(SPELL_API).then(function(response) {
      if(response.ok) {
        return response.json();
      }
      dispatch(spellsError('Error'));
    }).then(function(json_response) { 
      dispatch(spellsResponse(json_response));
    }).catch(function(error) {
      dispatch(spellsError(error.message));
    });

  };
}
