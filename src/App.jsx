import React from 'react';

import MiniPlayer from './components/mini-player';
import { CONTROLS, POSITION } from './components/mini-player';

import './App.css';

const STREAM_PLAYBACK_URL =
  'https://a5e08faf82b5.us-west-2.playback.live-video.net/api/video/v1/us-west-2.185192162905.channel.h1OeAA6SIh0Q.m3u8-';
const ChatApp = () => {
  return (
    <div className="ChatApp">
      <MiniPlayer
        streamUrl={STREAM_PLAYBACK_URL}
        controls={[CONTROLS.resize, CONTROLS.close, CONTROLS.mute]}
        position={POSITION.bottomRight}
        transition
      />
      <a name="chatStart"/>
      <div className="App-contentPlaceholder" key='0' >
        <a name="chatStart"></a><iframe src="https://chat.videovoyager.org:9000" id="chatFrame" style={{width: '100%', height: '500px'}}/>
      </div>
      {[...Array(5)].map((_, i) => (
        <div className="App-contentPlaceholder" key={i} />
      ))} 
    </div>
  );
};

export default ChatApp;
