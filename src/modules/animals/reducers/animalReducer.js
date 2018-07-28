import { createReducer } from 'reduxsauce'

export const FETCH_ANIMALS_START = 'FETCH_ANIMALS_START'
export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS'
export const FETCH_ANIMALS_ERROR = 'FETCH_ANIMALS_ERROR'
export const RESET_FETCH_ANIMALS = 'RESET_FETCH_ANIMALS'

const initialState = {
  animals: [],
  error: '',
  isLoading: false
}

const fetchAnimalsStart = (state = initialState) => ({
  ...state, isLoading: true, error: ''
})

const fetchAnimalsSuccess = (state = initialState, action) => {
  return {...state, ...action.payload, isLoading: false}
}

const fetchAnimalsError = (state = initialState, action) => ({
  ...state, ...action.payload, isLoading: false
})

const resetFetchAnimal = () => ({
  ...initialState
})

const handlers = {
  [FETCH_ANIMALS_START]: fetchAnimalsStart,
  [FETCH_ANIMALS_SUCCESS]: fetchAnimalsSuccess,
  [FETCH_ANIMALS_ERROR]: fetchAnimalsError,
  [RESET_FETCH_ANIMALS]: resetFetchAnimal
}

export default createReducer(initialState, handlers)
