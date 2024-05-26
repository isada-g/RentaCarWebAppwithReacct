import React from 'react';

function CreateCatalog({ inputData, handleChange }) {
    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={inputData.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                    data-type="catalog"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={inputData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    data-type="catalog"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={inputData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    data-type="catalog"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="isRented">Is Rented</label>
                <input
                    type="text"
                    className="form-control"
                    id="isRented"
                    name="isRented"
                    value={inputData.isRented}
                    onChange={handleChange}
                    placeholder="Enter rented status"
                    data-type="catalog"
                />
            </div>
        </div>
    );
}

export default CreateCatalog;
