import { Section } from './components/Section.js';

document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'https://api-document-prime-url'; // Atualize com o URL correto da sua API
    const appElement = document.getElementById('app');

    function handleError(error) {
        console.error('Erro ao carregar dados da API:', error);
    }

    // Função para buscar dados e renderizar seções
    function fetchAndRenderSection(endpoint, title) {
        axios.get(`${apiBaseUrl}${endpoint}`)
            .then(response => {
                const documentaries = response.data;
                const section = Section(title, documentaries);
                appElement.appendChild(section);
            })
            .catch(handleError);
    }

    // Requisições para as rotas
    fetchAndRenderSection('/sugestoes', 'Recomendações de Documentários');
    fetchAndRenderSection('/top-rated', 'Documentários Melhor Avaliados');
    fetchAndRenderSection('/recent-releases', 'Lançamentos Recentes');
});
