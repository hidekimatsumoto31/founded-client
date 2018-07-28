import request from 'utils/request'

export const fetchAnimals = async (params) => {
  try {
    const response = await request.get('/animals', { params })

    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
