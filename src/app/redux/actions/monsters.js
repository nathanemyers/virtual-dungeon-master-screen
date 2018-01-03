import { MONSTER_API } from 'app/constants/api'

const monstersRequest = (params) => ({
  type: 'MONSTERS_REQUEST',
  params,
});

const monstersResponse = (data) => ({
  type: 'MONSTERS_SUCCESS',
  monsters: data,
});

const monstersError = (error) => ({
  type: 'MONSTERS_ERROR',
  error: error,
});

export const fetchMonsters = (params) => {
  return (dispatch, getState) => {
    dispatch(monstersRequest(params));

    return fetch(MONSTER_API).then(function(response) {
      if(response.ok) {
        return response.json();
      }
      dispatch(monstersError('Error'));
    }).then(function(json_response) { 
      dispatch(monstersResponse(json_response));
    }).catch(function(error) {
      dispatch(monstersError(error.message));
    });

  };
}
