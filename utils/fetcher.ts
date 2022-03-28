// To connect frontend with backend
export const get = async (url: RequestInfo) => {
  const requestOptions = {
    method: 'GET',
  }
  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

export const post = async (url: RequestInfo, body: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

export const put = async (url: RequestInfo, body: any) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

export const del = async (url: RequestInfo) => {
  const requestOptions = {
    method: 'DELETE',
  }
  const response = await fetch(url, requestOptions)
  return handleResponse(response)
}

const handleResponse = async (response: {
  text: () => Promise<any>
  ok: any
  statusText: any
}) => {
  const text = await response.text()
  const data = text && JSON.parse(text)
  if (!response.ok) {
    const error = (data && data.message) || response.statusText
    return Promise.reject(error)
  }
  return data
}
