import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateCatalog from './UpdateCatalog';
import UpdateCar from './UpdateCar';
import UpdateModel from './UpdateModel';
import UpdateBrand from './UpdateBrand';
import UpdateComment from './UpdateComment';

function UpdateFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        catalog: { id: '', title: '', description: '', price: '', isRented: '' },
        car: { id: '', license: '', km: '', modelId: '' },
        model: { id: '', name: '', imageUrl: '', fuelType: '', gearType: '', brandId: '' },
        brand: { id: '', name: '' },
        comment: { id: '', content: '', catalogId: '' }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const catalogResponse = await axios.get(`http://localhost:5028/api/Catalog/${id}`);
                

                const carResponse = await axios.get(`http://localhost:5028/api/Car/${catalogResponse.data.carId}`);
                

                const modelResponse = await axios.get(`http://localhost:5028/api/Model/${carResponse.data.modelId}`);
                

                const brandResponse = await axios.get(`http://localhost:5028/api/Brand/${modelResponse.data.brandId}`);
                

                // Eğer comments boşsa, comment fetch etmeye çalışmıyoruz
                let commentData = { id: '', content: '', catalogId: '' };
                if (catalogResponse.data.comments.length > 0) {
                    commentData = catalogResponse.data.comments[0]; // İlk yorumu alıyoruz
                    console.log('Comment Data:', commentData);
                }

                setInputData({
                    catalog: {
                        id: catalogResponse.data.id,
                        title: catalogResponse.data.title,
                        description: catalogResponse.data.description,
                        price: catalogResponse.data.price,
                        isRented: catalogResponse.data.isRented
                    },
                    car: {
                        id: carResponse.data.id,
                        license: carResponse.data.license,
                        km: carResponse.data.km,
                        modelId: carResponse.data.modelId
                    },
                    model: {
                        id: modelResponse.data.id,
                        name: modelResponse.data.name,
                        imageUrl: modelResponse.data.imageUrl,
                        fuelType: modelResponse.data.fuelType,
                        gearType: modelResponse.data.gearType,
                        brandId: modelResponse.data.brandId
                    },
                    brand: {
                        id: brandResponse.data.id,
                        name: brandResponse.data.name
                    },
                    comment: commentData
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e, section) => {
        setInputData({
            ...inputData,
            [section]: {
                ...inputData[section],
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            console.log('Updating Brand:', inputData.brand);
            console.log('Updating Model:', inputData.model);
            console.log('Updating Car:', inputData.car);
            console.log('Updating Catalog:', inputData.catalog);
            console.log('Updating Comment:', inputData.comment);
    
            await axios.put(`http://localhost:5028/api/Brand/${inputData.brand.id}`, inputData.brand, { headers: { 'Content-Type': 'application/json' } });
            console.log("Brand updated successfully");
    
            await axios.put(`http://localhost:5028/api/Model/${inputData.model.id}`, inputData.model, { headers: { 'Content-Type': 'application/json' } });
            console.log("Model updated successfully");
    
            await axios.put(`http://localhost:5028/api/Car/${inputData.car.id}`, inputData.car, { headers: { 'Content-Type': 'application/json' } });
            console.log("Car updated successfully");
    
            await axios.put(`http://localhost:5028/api/Catalog/${inputData.catalog.id}`, inputData.catalog, { headers: { 'Content-Type': 'application/json' } });
            console.log("Catalog updated successfully");
    
            await axios.put(`http://localhost:5028/api/Comment/${inputData.comment.id}`, inputData.comment, { headers: { 'Content-Type': 'application/json' } });
            console.log("Comment updated successfully");
    
            alert("Data Updated Successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error occurred while updating data:", error);
            alert("Error occurred while updating data.");
        }
    };
    

    return (
        <div className="container mt-5">
            <h2>Update Records</h2>
            <form onSubmit={handleSubmit}>
                <UpdateCatalog inputData={inputData.catalog} handleChange={handleChange} />
                <UpdateCar inputData={inputData.car} handleChange={handleChange} />
                <UpdateModel inputData={inputData.model} handleChange={handleChange} />
                <UpdateBrand inputData={inputData.brand} handleChange={handleChange} />
                <UpdateComment inputData={inputData.comment} handleChange={handleChange} />
                <button type="submit" className="btn btn-primary">Update All</button>
            </form>
        </div>
    );
}

export default UpdateFormPage;
