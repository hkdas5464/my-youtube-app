import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SidebarRow from './SidebarRow/SidebarRow';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

import VideoLibrauryTcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlineIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlineIcon from '@material-ui/icons/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={TrendingIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrauryTcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
            <SidebarRow Icon={ThumbUpAltOutlineIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlineIcon} title="More" />
            <hr />






        </div>
    )
}

export default Sidebar
