import { createSlice } from '@reduxjs/toolkit';
import { Game, useGetGamesQuery } from './api/gamesApi'

interface GamesState {
    games: Game[];
    isLoading: boolean;
    error: string | null;
}

const initialState: GamesState = {
    games: [],
    isLoading: false,
    error: null,
};

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(useGetGamesQuery.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(useGetGamesQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.games = action.payload;
            })
            .addCase(useGetGamesQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch games';
            });
    },
});

export default gamesSlice.reducer;

