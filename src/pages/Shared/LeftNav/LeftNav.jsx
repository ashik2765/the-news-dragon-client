import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavFeatured from './LeftNavFeatured';

const LeftNav = () => {
    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategoris(data))
            .catch(error => console.error(error))

    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className=' text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftNavFeatured></LeftNavFeatured>
        </div>
    );
};

export default LeftNav;