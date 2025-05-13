import React from 'react'

const AudioPlayer = ({ src }) => {
  return (
    <div className="my-4">
      <audio controls src={src} className="w-full rounded" />
    </div>
  )
}

export default AudioPlayer
