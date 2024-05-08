import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm, selectSelectedType, setSelectedType } from '../../features /filter/filterSlice';

const Header: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const selectedType = useSelector(selectSelectedType);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedType(e.target.value));
    };

    return (
        <div className="header">
            <div className='dropdown'>
                <select value={selectedType || ''} onChange={handleTypeChange}>
                    <option value="">All</option>
                </select>
            </div>
            <div>
                <h1>Game Filter</h1>
                <input
                    type="text"
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
};

export default Header;
