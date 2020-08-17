import React from 'react';
import './recommendedVideos.css';
import { Grid } from "@material-ui/core";
import VideoCard from './Video/Videocard';

function RecomondedVideo({ videos, onVideoSelect }) {


    const listOfVideos = videos.map(video => (
        <VideoCard
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
        />
    ));
    // const listOfVideos = videos.map(video => (
    //     <VideoCard
    //         onVideoSelect={onVideoSelect}
    //         // key={video.id.videoId}
    //         video={video}
    //     />
    // ));
    return (

        <div className="recommendedVideos">

            <h2>Recomonded</h2>
            <div className="recommendedVideos__videos">


                <Grid container spacing={10}>
                    {listOfVideos}
                </Grid>

                {/* {
                    videos.map((video) => {
                        return (
                            <VideoCard className="videocardssss"
                                onVideoSelect={onVideoSelect}
                                key={video.id.videoId}
                                video={video}
                            />
                        )
                    })
              //  } */}


            </div>
        </div>
    )
}

export default RecomondedVideo

