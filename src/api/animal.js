import request from 'utils/request'
import delay from 'utils/delay'

export const fetchAnimals = async (type) => {
  try {
    const response = await request.get('/animals', { params: { type } })

    await delay(2000) // simulate loading

    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
