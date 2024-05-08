import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configs } from "../../../configs";

export type Game = Record<string, any>[] | number;

export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({ baseUrl: configs.server_url }),
    endpoints: (builder) => ({
        getGames: builder.query<Game[], void>({
            query: () => 'game_list',
        }),
    }),
});

export const { useGetGamesQuery } = gamesApi;

export default gamesApi.reducer;