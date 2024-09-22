document.addEventListener('DOMContentLoaded', () => {
    const apiEndpoint = 'https://api-endpoint-url/sugestoes';
    const documentariesSection = document.getElementById('documentaries');

    // Função para buscar dados da API
    async function fetchDocumentaries() {
        try {
            const response = await fetch(apiEndpoint);
            const documentaries = await response.json();

            // Inserir os dados na página
            documentaries.forEach(doc => {
                const docCard = document.createElement('div');
                docCard.classList.add('doc-card');

                docCard.innerHTML = `
                    <img src="${doc.imagem}" alt="${doc.titulo}">
                    <h3>${doc.titulo}</h3>
                    <p>${doc.descricao}</p>
                `;

                documentariesSection.appendChild(docCard);
            });
        } catch (error) {
            documentariesSection.innerHTML = '<p>Erro ao carregar os documentários.</p>';
            console.error('Erro ao buscar dados da API:', error);
        }
    }

    // Chamar a função para carregar os documentários
    fetchDocumentaries();
});
