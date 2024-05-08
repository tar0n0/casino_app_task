import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetGamesQuery } from "../../features /games/api/gamesApi";
import { selectSearchTerm, selectSelectedType } from "../../features /filter/filterSlice";

const GameList: React.FC = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const { data: games, isLoading, isError, refetch } = useGetGamesQuery();
    const searchTerm = useSelector(selectSearchTerm);
    const selectedType = useSelector(selectSelectedType);
    const [filteredGames, setFilteredGames] = useState<any[]>([]);

    useEffect(() => {
        if (!games) {
            // @ts-ignore
            dispatch(refetch());
        }
    }, [games, dispatch, refetch]);

    useEffect(() => {
        if (!games) return;

        let updatedGames = games;
        if (searchTerm) {
            updatedGames = updatedGames.filter((game: any) =>
                game.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedType) {
            updatedGames = updatedGames.filter((game: any) =>
                game.type === selectedType
            );
        }
        setFilteredGames(updatedGames);
    }, [games, searchTerm, selectedType]);

    const handleScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (scrolled >= scrollable && !isLoading) {
            // Load more games
            // @ts-ignore
            dispatch(refetch());
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div>
            <ul>
                {filteredGames.map((game: any) => (
                    <li key={game.id}>
                        <img src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${game.id}.png`} alt={game.name} />
                        {game.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;
