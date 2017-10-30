import axios from 'axios'

const SEARCH_URL = `https://api.spotify.com/v1/search?`

export function getArtist(searchTerm) {
  const request = actions.get(`#{SEARCH_URL}/q=${searchTerm}`)

  return {
    type: FETCH_ARTISTS,
    payload: request
  };
}
