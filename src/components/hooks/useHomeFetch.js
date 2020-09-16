import { useState, useEffect } from 'react';
import { POPULAR_BASE_POINT } from '../../helpers/config';

export const useHomeFetch = (searchTerm) => {
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

    // Fetch popular movies initialy on mount
    useEffect(() => {
        if (sessionStorage.homeState) {
            console.log('Grabbing from Session Storage')
            setState(JSON.parse(sessionStorage.homeState));
            setLoading(false);
        } else {
            console.log('Grabbing from API')
            fetchMovies(POPULAR_BASE_POINT);
        }
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            console.log('writing to session storage');
            sessionStorage.setItem('homeState', JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return [{ state, loading, error }, fetchMovies];
};
