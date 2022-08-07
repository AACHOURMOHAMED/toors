/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };
  const fetchToors = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchToors();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No toors left</h2>
        <button type="button" className="btn" onClick={fetchToors}>
          referch
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
