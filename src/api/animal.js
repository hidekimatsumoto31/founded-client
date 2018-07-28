import request from 'utils/request'

export const fetchAnimals = async (type) => {
  try {
    const response = await request.get('/animals', { params: { type } })

    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
