import { getTopRated } from '../utils/api.js';

function TopRatedComponent() {
    const topRatedSection = document.getElementById('top-rated-list');

    getTopRated()
        .then(response => {
            const documentaries = response.data;
            documentaries.forEach(doc => {
                const docCard = document.createElement('div');
                docCard.classList.add('card');

                const imageUrl = doc.imagem ? doc.imagem : 'https://via.placeholder.com/300x200.png?text=Documentário';

                docCard.innerHTML = `
                    <img src="${imageUrl}" alt="${doc.titulo}">
                    <h3>${doc.titulo}</h3>
                    <p>${doc.descricao}</p>
                `;
                topRatedSection.appendChild(docCard);
            });
        })
        .catch(error => console.error('Erro ao carregar documentários melhor avaliados:', error));
}

document.addEventListener('DOMContentLoaded', TopRatedComponent);
