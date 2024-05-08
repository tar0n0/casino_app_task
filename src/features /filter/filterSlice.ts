import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "../../app/rootReducer";

interface FilterState {
    searchTerm: string;
    selectedType: string | null;
}

const initialState: FilterState = {
    searchTerm: '',
    selectedType: null,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSelectedType: (state, action) => {
            state.selectedType = action.payload;
        },
    },
});

export const { setSearchTerm, setSelectedType } = filterSlice.actions;

export const selectSearchTerm = (state: RootState) => state.filter.searchTerm;
export const selectSelectedType = (state: RootState) => state.filter.selectedType;

export default filterSlice.reducer;
