import React from 'react';

function CreateCar({ inputData, handleChange }) {
    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="license">License</label>
                <input
                    type="text"
                    className="form-control"
                    id="license"
                    name="license"
                    value={inputData.license}
                    onChange={handleChange}
                    placeholder="Enter license"
                    data-type="car"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="km">Kilometers</label>
                <input
                    type="number"
                    className="form-control"
                    id="km"
                    name="km"
                    value={inputData.km}
                    onChange={handleChange}
                    placeholder="Enter kilometers"
                    data-type="car"
                />
            </div>
        </div>
    );
}

export default CreateCar;
