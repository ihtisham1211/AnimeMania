// To connect frontend with backend
export const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json()
  })
