export default async function handleFetch(request, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '35973313-29bfc7fe9de9991c0ff9642d4';
  return await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${request}&per_page=12&page=${page}&image_type=photo&orientation=horizontal`
  )
    .then(response => response.json())
    .catch(err => console.log(err));
}
