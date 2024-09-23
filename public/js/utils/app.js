import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const getRecommendations = () => {
    return axios.get(`${API_BASE_URL}/recommendations`);
};

export const getTopRated = () => {
    return axios.get(`${API_BASE_URL}/top-rated`);
};

export const getRecentReleases = () => {
    return axios.get(`${API_BASE_URL}/recent-releases`);
};


import { Section } from '../components/Section.js';

document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'http://localhost:3000';
    const appElement = document.getElementById('app');

    function handleError(error) {
        console.error('Erro ao carregar dados da API:', error);
    }


    function fetchAndRenderSection(endpoint, title) {
        axios.get(`${apiBaseUrl}${endpoint}`)
            .then(response => {
                const documentaries = response.data;
                const section = Section(title, documentaries);
                appElement.appendChild(section);
            })
            .catch(handleError);
    }


    fetchAndRenderSection('/recommendation-components', 'Recomendações de Documentários');
    fetchAndRenderSection('/top-rated', 'Documentários Melhor Avaliados');
    fetchAndRenderSection('/recent-releases', 'Lançamentos Recentes');


});
