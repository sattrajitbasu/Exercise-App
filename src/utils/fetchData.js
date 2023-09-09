export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fe609638d4mshc0fe5f770e023bep1a5aa5jsnb8f4609f57f0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fe609638d4mshc0fe5f770e023bep1a5aa5jsnb8f4609f57f0',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}