document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'http://localhost:3000';

    const recommendationsSection = document.getElementById('recommendations-list');
    const topRatedSection = document.getElementById('top-rated-list');
    const recentReleasesSection = document.getElementById('recent-releases-list');

    
    function handleError(error) {
        console.error('Erro ao carregar dados da API:', error);
    }

    
    function renderDocumentaryList(section, documentaries) {
        documentaries.forEach(doc => {
            const docCard = document.createElement('div');
            docCard.classList.add('card');

            docCard.innerHTML = `
                <h3>${doc.titulo}</h3>
                <p>${doc.descricao}</p>
            `;

            section.appendChild(docCard);
        });
    }

    
    axios.get(`${apiBaseUrl}/sugestoes`)
        .then(response => {
            const documentaries = response.data;
            renderDocumentaryList(recommendationsSection, documentaries);
        })
        .catch(handleError);


    axios.get(`${apiBaseUrl}/top-rated`)
        .then(response => {
            const topRatedDocumentaries = response.data;
            renderDocumentaryList(topRatedSection, topRatedDocumentaries);
        })
        .catch(handleError);


    axios.get(`${apiBaseUrl}/recent-releases`)
        .then(response => {
            const recentDocumentaries = response.data;
            renderDocumentaryList(recentReleasesSection, recentDocumentaries);
        })
        .catch(handleError);
});
