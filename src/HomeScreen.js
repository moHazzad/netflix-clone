import React from 'react'
import Banner from './Banner'

import requests from './Requests'
import './HomeScreen.css'
import Nav from './Nav'
import Row  from './Row'


function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav /> 
      <Banner />

      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      
      
    </div>
  )
}

export default HomeScreen