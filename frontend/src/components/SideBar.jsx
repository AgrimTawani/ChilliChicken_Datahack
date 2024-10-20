/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

const SideBar = () => {
    const [flightData, setFlightData] = useState(null);
    const [error, setError] = useState(null);
    const [aircraftId, setAircraftId] = useState('');

    const fetchFlightData = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8080/flight`);
            setFlightData(response.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching data:", err);
            setFlightData(null);
            setError(err.response ? err.response.data.error : 'Error fetching data');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (aircraftId) {
            fetchFlightData(aircraftId);
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80 h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Flight Information</h2>
            <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter Aircraft ID"
                        value={aircraftId}
                        onChange={(e) => setAircraftId(e.target.value)}
                        className="w-full p-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <Search className="text-gray-400 hover:text-blue-500" />
                    </button>
                </div>
            </form>
            {error && (
                <p className="text-red-500 mb-4">{error}</p>
            )}
            {flightData ? (
                <div className="space-y-4">
                    <p className="bg-white p-3 rounded shadow">
                        <span className="font-semibold text-gray-700 block mb-1">Departure Airport:</span>
                        <span className="text-blue-600">{flightData.departure_airport}</span>
                    </p>
                    <p className="bg-white p-3 rounded shadow">
                        <span className="font-semibold text-gray-700 block mb-1">Arrival Airport:</span>
                        <span className="text-blue-600">{flightData.arrival_airport}</span>
                    </p>
                    <p className="bg-white p-3 rounded shadow">
                        <span className="font-semibold text-gray-700 block mb-1">Estimated Departure (UTC):</span>
                        <span className="text-green-600">{flightData.estimated_departure_utc}</span>
                    </p>
                    <p className="bg-white p-3 rounded shadow">
                        <span className="font-semibold text-gray-700 block mb-1">Estimated Arrival (UTC):</span>
                        <span className="text-green-600">{flightData.estimated_arrival_utc}</span>
                    </p>
                    <p className="bg-white p-3 rounded shadow">
                        <span className="font-semibold text-gray-700 block mb-1">Temperature:</span>
                        <span className="text-orange-500">{flightData.temperature} °F</span>
                    </p>
                </div>
            ) : (
                <p className="text-gray-500 italic">Enter an Aircraft ID to see details</p>
            )}
        </div>
    );
};

export default SideBar;