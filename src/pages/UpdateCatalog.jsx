import React from 'react';

function UpdateCatalog({ inputData, handleChange }) {
    return (
        <div className='w-50 border bg-light p-5'>
            <h3>Catalog</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    name='title'
                    className='form-control'
                    value={inputData.title}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    name='description'
                    className='form-control'
                    value={inputData.description}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                    type="number"
                    name='price'
                    className='form-control'
                    value={inputData.price}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="isRented" className="form-label">Isrented</label>
                <input
                    type="text"
                    name='isRented'
                    className='form-control'
                    value={inputData.isRented}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
        </div>
    );
}

export default UpdateCatalog;
