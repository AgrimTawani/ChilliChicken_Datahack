import React, { useState } from 'react';
import axios from 'axios';

const Pred = () => {
  const [visibility, setVisibility] = useState('');
  const [altitude, setAltitude] = useState('');
  const [temp, setTemp] = useState('');
  const [dew, setDew] = useState('');
  const [departureDelay, setDepartureDelay] = useState(''); // New state for departure delay
  const [arrivalDelay, setArrivalDelay] = useState(null); // State to hold the predicted arrival delay

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the data to send
    const data = {
      visibility: parseFloat(visibility),
      altitude: parseFloat(altitude),
      temperature: parseFloat(temp),
      dewpoint: parseFloat(dew),
      departure_delay: parseFloat(departureDelay), // Include departure delay
    };

    try {
      const response = await axios.post('http://127.0.0.1:3030/predict_delay', data);
      setArrivalDelay(response.data.arrival_delay); // Update state with the response
    } catch (error) {
      console.error("Error making the request:", error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="visibility" className="block mb-2">Visibility</label>
          <input 
            type="text" 
            id="visibility" 
            className="border rounded p-2 w-full"
            value={visibility} 
            onChange={(e) => setVisibility(e.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="altitude" className="block mb-2">Altitude</label>
          <input 
            type="text" 
            id="altitude" 
            className="border rounded p-2 w-full"
            value={altitude} 
            onChange={(e) => setAltitude(e.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="temp" className="block mb-2">Temperature</label>
          <input 
            type="text" 
            id="temp" 
            className="border rounded p-2 w-full"
            value={temp} 
            onChange={(e) => setTemp(e.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dew" className="block mb-2">Dewpoint</label>
          <input 
            type="text" 
            id="dew" 
            className="border rounded p-2 w-full"
            value={dew} 
            onChange={(e) => setDew(e.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="departureDelay" className="block mb-2">Departure Delay</label>
          <input 
            type="text" 
            id="departureDelay" 
            className="border rounded p-2 w-full"
            value={departureDelay} 
            onChange={(e) => setDepartureDelay(e.target.value)} 
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>

      {arrivalDelay !== null && (
        <div className="mt-4 text-black">
          <h2>Predicted Arrival Delay: {arrivalDelay} minutes</h2>
        </div>
      )}
    </div>
  );
}

export default Pred;