import React from 'react'
import { AnimeItem } from '../components/index'
import useFetch from '../helpers/useFetch'

function AnimeList() {

  const [animeList, loading] = useFetch(
    'https://api.jikan.moe/v3/season/2020/summer',
    'animeList'
  )

  if (loading) {
    return (
      <div className="container">
        <h2>Anime Detail</h2>
        <hr/>
        <div className="alert alert-info" role="alert">
          Loading your data...
        </div>
      </div>
    )
  } else if (animeList.length === 0) {
    return (
      <div className="container">
        <h2>Anime Detail</h2>
        <hr/>
        <div className="alert alert-danger" role="alert">
          There's a problem fetching data, please contact developer!
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>Anime List</h2>
      <hr/>
      <div className="row justify-content-center">
        {
          animeList.map((anime, i) => (
            <AnimeItem
              key={anime.mal_id}
              i={i}
              anime={anime}
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default AnimeList