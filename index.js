import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LaptopsList = () => {
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000');
                setLaptops(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchLaptops();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Top 10 Laptops on AMZ</h1>
            <ul>
                {laptops.map((laptop, index) => (
                    <li key={index}>
                        <h2>{laptop.productName}</h2>
                        <p>Price: {laptop.price}</p>
                        <p>Rating: {laptop.rating}</p>
                        <p>Discount: {laptop.discount}</p>
                        <p>Availability: {laptop.availability}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LaptopsList;





