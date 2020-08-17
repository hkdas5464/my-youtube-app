import React from 'react';
import './ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { Avatar } from '@material-ui/core';

function ChannelRow({ image, channel, verefied, subs, noOfvideos, description }) {
    return (
        <div className="channelRow">
            <Avatar
                className="channelRow__logo"
                alt={channel}
                src={image}
            />
            <div className="channelRow__text">
                <h4>{channel}{verefied && <VerifiedIcon />}
                </h4>
                <p>{subs} Subscribers . {noOfvideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default ChannelRow;
