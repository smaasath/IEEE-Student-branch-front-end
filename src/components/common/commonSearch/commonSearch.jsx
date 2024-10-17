import React, { useEffect, useState } from 'react'
import search from '../../../assets/icons/search.png'



const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const CommonSearch = ({ primary, onChange }) => {

    const [inputValue, setInputValue] = useState('');
    const debouncedSearchTerm = useDebounce(inputValue, 300);

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(debouncedSearchTerm);
        } else {
            console.warn("onChange is not a function");
        }
    }, [debouncedSearchTerm, onChange]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <div className="input-group">
                <input onChange={handleInputChange} type="search" className="form-control form-control-sm" placeholder="Search....." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className={`input-group-append ps-3 pe-3 p-2 text-center rounded-end-3 ${primary ? "bag-primary" : "bg-third"}`}>
                    <img style={{ width: 15, height: 15 }} src={search} className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default CommonSearch
