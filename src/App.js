import React from 'react';
import './styles/styles.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import './App.css'

function App() {

  const types_header=["Gritty Movies",
"Continue Watching for Pratik",
"Trending Now",
"Anime",
"Blockbuster Crime Movies",
"Revenge TV Shows",
"Casual Viewing",
"Exciting Movies",
"Popular on Netflix",
"Teen TV Dramas",
"New Releases",
"Kids'TV",
"Top Picks for pratik",
"Comedies",
"Adult Animation",
"Sci-Fi & Fantasy",
"Documentaries",
"Futuristic Sci-Fi",
"Thriller Movies",
"Romantic Movies",
"Action Movies",
"Hindi Movies",
"My List"]
  return (
    <div className="App">
      <Banner/>
      <h1> Going through front-end</h1>
      {types_header.map((value, key) => (
        <Row
          isLargeRow
          title={types_header[key]}
          request={requests.fetchTrending}
          
        ></Row>
      ))}
      
    </div>
  );
}

export default App;
