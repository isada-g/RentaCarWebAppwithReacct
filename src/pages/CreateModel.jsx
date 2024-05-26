import React from 'react';

function CreateModel({ inputData, handleChange }) {
    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    data-type="model"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={inputData.imageUrl}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    data-type="model"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fuelType">Fuel Type</label>
                <input
                    type="text"
                    className="form-control"
                    id="fuelType"
                    name="fuelType"
                    value={inputData.fuelType}
                    onChange={handleChange}
                    placeholder="Enter fuel type"
                    data-type="model"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="gearType">Gear Type</label>
                <input
                    type="text"
                    className="form-control"
                    id="gearType"
                    name="gearType"
                    value={inputData.gearType}
                    onChange={handleChange}
                    placeholder="Enter gear type"
                    data-type="model"
                />
            </div>
        </div>
    );
}

export default CreateModel;
