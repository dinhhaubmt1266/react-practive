import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className={`youtube-item ${props.className}`}>
          <div className='youtube-image'>
            <img src={props.image} alt=""></img>
          </div>
            
          <div className='youtube-footer'>
              <img src={props.avatar} className='youtube-avatar' alt="" >
              </img>
            <div className='youtube-info'>
              <h3 className='youtube-title'>{props.title || "Example"}</h3>
              <h4 className='youtube-author'>{props.author}</h4>
            </div>
          </div>
            
        </div>
      )
};

export default YoutubeItem; 