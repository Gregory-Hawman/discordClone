import React from 'react';
import TopNav from './TopNav';
import Intro from './Intro';
import Posts from './Posts';
import BottomBar from './BottomBar'

export default function ContentContainer(props) {

  return (
    <div className="content-container">
        <TopNav />
        <Intro channels={props.channels}/>
        <Posts />
        <BottomBar channels={props.channels}/>
    </div>
  )
}

