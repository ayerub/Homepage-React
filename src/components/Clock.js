import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setTime(new Date())
  }

  return (
    <h1 className='text-white font-l'>
      {time.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
      })}
    </h1>
  )
}

export default Clock
