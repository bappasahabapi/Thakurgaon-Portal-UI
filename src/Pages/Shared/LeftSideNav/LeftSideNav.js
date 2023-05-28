import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://thakurgaon-portal-server.vercel.app/news-categories')
        // fetch('http://localhost:5000/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));

       
    }, [])

    return (
        <div>
            <h6>All Category: {categories.length} types</h6>
           
            <div>
                {
                    categories.map(category => 
                    <p
                     key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;