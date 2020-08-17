import React from 'react';
import TuneOutlineIcon from '@material-ui/icons/TuneOutlined';
import Recomnendedvideos from '../../Components/Recomended/RecomondedVideo';
import './SearchPage.css'
import img from './loading.gif';

function SearchPage({ video, videos, setSelectedVideo }) {
    if (!video) return <div className="heading"><img src={img} alt={img} /></div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

    return (
        <div className="SearchPage">
            <div className="searctPage__filter">
                <TuneOutlineIcon />

                <h1>FILTER</h1>

            </div>
            <iframe title="youtube-video" width="727" height="409" src={videoSrc}
                frameborder="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <hr />
            <Recomnendedvideos videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
    )
}
// 2:47:20

export default SearchPage
