import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Grid, Paper, Typography } from "@material-ui/core";


import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import './VideoCard.css'

function Videocard({ video, onVideoSelect, image, title, channel, views, timestamp, channelimage }) {
    return (


        <div className="videoCard"  >
            <Link to={`/search`}>
                <Paper style={{ alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>

                    <img style={{ marginleft: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                    <div className="videoCard__info">
                        <Avatar
                            className="videoCard__avater"
                            alt={channel}
                            src={video.snippet.thumbnails.default.url}
                        />

                        <div className="videoCard_text">
                            <b>{video.snippet.title}</b>
                            <h4>{title}</h4>
                            <p>{channel}</p>

                            <p>
                                {views} . {timestamp}
                            </p>

                        </div>
                    </div>
                </Paper>
            </Link>
        </div>





    )
}

export default Videocard
