import request from 'utils/request'

export const fetchAnimals = async (type) => {
  try {
    const response = await request.get('/animals', { params: { type } })

    await timeout(2000) // simulate loading

    return response.data
  } catch (err) {
    throw new Error(err)
  }
}

const timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
