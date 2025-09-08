import {  useEffect, useState } from 'react'
import './App.css'


function App() {

  const [Message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

        fetch('http://localhost:8000/api/test/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setMessage(data)   // save API response
        setLoading(false)
      })
      .catch(err => {
        console.error("Fetch error:", err)
        setError(err.message)
        setLoading(false)
      })
  }), [];
;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

    <div className='container bg-body-secondary d-flex flex-column justify-content-center'>
      <h1 className='text-center'>{Message.message}</h1>
      <br/>
      <p className='text-center'>{Message.data}</p>
    </div>
   
  )
}

export default App
