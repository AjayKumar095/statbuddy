import { useEffect, useState } from 'react';

export default function ApiCaller({ endpoint }) {
  const [data, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://172.17.5.210:8000/api/${endpoint}`)
    
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMessage(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [endpoint]);   // ✅ retrun if endpoint changes

  if (loading) return "Loading...";
  if (error) return "Error: " + error;

  return {data, loading, error};

}


