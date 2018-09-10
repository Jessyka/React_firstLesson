import React from 'react';
import VideoListItem from '../components/videoListItem';


const VideoList = (props) =>
{
     let videoListItem = [];
    
     if (props.videos.length > 0)
     {
         videoListItem = props.videos.map((video) => {
            return  <VideoListItem 
                onVideoSelect = {props.onVideoSelect}
                key={video.etag} 
                video={video} />;
            });
    }

    return (
        <ul className="col-md-4 list-group"> 
            {videoListItem}
        </ul>
    );
}

export default VideoList;