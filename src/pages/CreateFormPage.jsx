import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import CreateCatalog from './CreateCatalog';
import CreateCar from './CreateCar';
import CreateModel from './CreateModel';
import CreateBrand from './CreateBrand';

function CreateFormPage() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        catalog: {
            title: '',
            description: '',
            price: '',
            isRented: '',
            carId: ''
        },
        car: {
            license: '',
            km: '',
            modelId: ''
        },
        model: {
            name: '',
            imageUrl: '',
            fuelType: '',
            gearType: '',
            brandId: ''
        },
        brand: {
            name: ''
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Brand (Marka) oluşturma
            const brandResponse = await axiosInstance.post('/api/Brand/add', inputData.brand);
            const brandId = brandResponse.data.id;

            // Model (Model) oluşturma
            const modelData = { ...inputData.model, brandId: brandId };
            const modelResponse = await axiosInstance.post('/api/Model/add', modelData);
            const modelId = modelResponse.data.id;

            // Car (Araç) oluşturma
            const carData = { ...inputData.car, modelId: modelId };
            const carResponse = await axiosInstance.post('/api/Car/add', carData);
            const carId = carResponse.data.id;

            // Catalog (Katalog) oluşturma
            const catalogData = { ...inputData.catalog, carId: carId };
            await axiosInstance.post('/api/Catalog/add', catalogData);

            alert("Veriler başarıyla kaydedildi!");
            navigate('/');
        } catch (error) {
            console.error('Veri kaydedilirken hata oluştu:', error.response ? error.response.data : error.message);
            alert("Veri kaydedilirken hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    const handleChange = (e) => {
        const { name, value, dataset } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [dataset.type]: {
                ...prevState[dataset.type],
                [name]: value
            }
        }));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Create Forms</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <h4>Create Catalog</h4>
                    <CreateCatalog inputData={inputData.catalog} handleChange={handleChange} />
                </div>
                <div className="mb-4">
                    <h4>Create Car</h4>
                    <CreateCar inputData={inputData.car} handleChange={handleChange} />
                </div>
                <div className="mb-4">
                    <h4>Create Model</h4>
                    <CreateModel inputData={inputData.model} handleChange={handleChange} />
                </div>
                <div className="mb-4">
                    <h4>Create Brand</h4>
                    <CreateBrand inputData={inputData.brand} handleChange={handleChange} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Create All</button>
                </div>
            </form>
        </div>
    );
}

export default CreateFormPage;
