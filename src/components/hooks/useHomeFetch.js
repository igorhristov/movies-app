import { useState, useEffect } from 'react';
import { POPULAR_BASE_POINT } from '../../helpers/config';

export const useHomeFetch = () => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (endpoint) => {
        setError(false);
        setLoading(true);

        const isLoadMore = endpoint.search('page');

        try {
            const result = await (await fetch(endpoint)).json();
            setState((prev) => ({
                ...prev,
                movies:
                    isLoadMore !== -1
                        ? [...prev.movies, ...result.results]
                        : [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages,
            }));
        } catch (err) {
            setError(true);
            console.log(err);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchMovies(POPULAR_BASE_POINT);
    }, []);

    return [{ state, loading, error }, fetchMovies];
};
