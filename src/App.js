import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import VideoPage from '../src/Components/SearchPage/SearchPage'
import Grid from '@material-ui/core/Grid'
import Sidebar from './Components/Sidebar/Sidebar';
import youtube from "./asset/api/youtube";
import Recomnendedvideos from './Components/Recomended/RecomondedVideo';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <div className="App">

      <Router>
        <Header onSubmit={handleSubmit} />
        <Switch>
          <Route path="/search">


            <div className="app__page">
              <Sidebar />
              <VideoPage video={selectedVideo} videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </Route>
          <Route path="/">
            {/* <Header /> */}
            <div className="app__page">
              <Sidebar />
              {/* <VideoDetail video={selectedVideo} /> */}
              <Grid>
                <Recomnendedvideos videos={videos} onVideoSelect={setSelectedVideo} />
              </Grid>
            </div>
          </Route>
          <Route path="/search">
            <VideoPage />
          </Route>
        </Switch>
      </Router>

      {/* <Sidebar/> */}
      {/* Sidebar */}
      {/* Recomnendedvideos */}
    </div>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 30,
        key: '[XXXXXXXXXXXX-API-KEY-XXXXXXXXXX]',

        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

}

export default App;
