import { fetchAnimals as fetch } from 'api/animal'

import {
  FETCH_ANIMALS_START,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR,
  RESET_FETCH_ANIMALS
} from '../reducers/animalReducer'

export const fetchAnimalsStart = () => ({ type: FETCH_ANIMALS_START })
export const fetchAnimalsSuccess = (animals) => ({ type: FETCH_ANIMALS_SUCCESS, payload: { animals } })
export const fetchAnimalsError = (error) => ({ type: FETCH_ANIMALS_ERROR, payload: { error } })
export const resetFetchAnimal = () => ({ type: RESET_FETCH_ANIMALS })

export const fetchAnimals = (type) => {
  return async dispatch => {
    try {
      dispatch(fetchAnimalsStart())

      const animals = await fetch(type)

      return dispatch(fetchAnimalsSuccess(animals))
    } catch (err) {
      dispatch(fetchAnimalsError(err.message))

      throw err
    }
  }
}

export const resetAnimals = () => {
  return async dispatch => {
    dispatch(resetFetchAnimal())
  }
}
