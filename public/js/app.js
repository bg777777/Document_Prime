import { Section } from './components/Section.js';

document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'https://api-document-prime-url';
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


    fetchAndRenderSection('/sugestoes', 'Recomendações de Documentários');
    fetchAndRenderSection('/top-rated', 'Documentários Melhor Avaliados');
    fetchAndRenderSection('/recent-releases', 'Lançamentos Recentes');
});
