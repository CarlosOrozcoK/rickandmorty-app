export const reqCharacters = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize
  const api_url = `https://rickandmortyapi.com/api/character?page=${page}&limit=${pageSize}`

  const resp = await fetch(api_url)
  const data = await resp.json()

  return data
}
