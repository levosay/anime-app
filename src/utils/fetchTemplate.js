export const fetchTemplate = async (url, method, data) => {
  const response = await fetch(url, {
    method: method.toUpperCase(),
    body: data
  })

  return response.json()
}
