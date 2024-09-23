import { getRecommendations } from '../utils/api.js';

function RecommendationComponent() {
    const recommendationsSection = document.getElementById('recommendations-list');

    getRecommendations()
        .then(response => {
            const documentaries = response.data;  // Assumindo que a resposta da API tem um array de documentários
            documentaries.forEach(doc => {
                const docCard = document.createElement('div');
                docCard.classList.add('card');

                // Adicionando uma imagem do documentário, se houver
                const imageUrl = doc.imagem ? doc.imagem : 'https://via.placeholder.com/300x200.png?text=Documentário';
                
                docCard.innerHTML = `
                    <img src="${imageUrl}" alt="${doc.titulo}">
                    <h3>${doc.titulo}</h3>
                    <p>${doc.descricao}</p>
                `;
                recommendationsSection.appendChild(docCard);
            });
        })
        .catch(error => console.error('Erro ao carregar recomendações:', error));
}

document.addEventListener('DOMContentLoaded', RecommendationComponent);
