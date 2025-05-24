import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
   <div className="flex flex-col h-screen">
  <div className="shrink-0">
    <ButtonsList />
  </div>
  <div className="flex-1 overflow-y-auto">
    <VideoContainer />
  </div>
</div>
  )
}

export default MainContainer