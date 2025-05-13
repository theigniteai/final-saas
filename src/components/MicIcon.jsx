import React from 'react'
import { Mic, MicOff } from 'lucide-react'

const MicIcon = ({ isRecording }) => {
  return (
    <div className="flex justify-center mb-4">
      {isRecording ? (
        <Mic className="text-red-600 w-8 h-8 animate-pulse" />
      ) : (
        <MicOff className="text-gray-500 w-8 h-8" />
      )}
    </div>
  )
}

export default MicIcon
