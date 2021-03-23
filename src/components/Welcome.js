import React, { useState, useEffect } from 'react'

const Welcome = ({ name }) => {
  const [date, setDate] = useState(new Date())
  const [hour, setHour] = useState(date.getHours())
  const [message, setMessage] = useState('')

  useEffect(() => {
    document.title = message

    function updateTime() {
      setDate(new Date())
      setHour(date.getHours())
    }
    let refresh = setInterval(() => updateTime(), 1000)

    if (hour <= 11) {
      setMessage(`Good Morning ${name}`)
    } else if (hour > 11 && hour <= 16) {
      setMessage(`Good Afternoon ${name}`)
    } else {
      setMessage(`Good Evening ${name}`)
    }

    return function cleanup() {
      clearInterval(refresh)
    }
  }, [hour, name, date, message])

  return <h1 className='text-white font-m mt-5'>{message}</h1>
}

export default Welcome
