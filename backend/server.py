from flask import Flask, jsonify, request
from flask_cors import CORS  # Add this line
import pandas as pd
import random

app = Flask(__name__)
CORS(app)
# Load your CSV file
df = pd.read_csv('cleaned_data (1).csv')  # Update this path to your CSV

@app.route('/flight', methods=['GET'])
def get_flight_info():
    aircraft_id_input = request.args.get('aircraft_id')  # Get aircraft_id from query parameter
    
    if not aircraft_id_input:
        return jsonify({"error": "aircraft_id is required"}), 400
    
    # Fetch the row for the given aircraft_id
    flight_info = df[df['aircraft_id'] == aircraft_id_input]
    
    if flight_info.empty:
        return jsonify({"error": "No flight found for the given aircraft_id"}), 404
    
    flight_info = flight_info.iloc[0]  # Get the first row

    # Create a response object
    response = {
        "departure_airport": flight_info['departure_airport'],
        "arrival_airport": flight_info['arrival_airport'],
        "estimated_departure_utc": flight_info['estimated_departure_utc'],
        "estimated_arrival_utc": flight_info['estimated_arrival_utc'],
        "temperature": random.randint(60, 85)  # Simulated temperature
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True,port=8080)