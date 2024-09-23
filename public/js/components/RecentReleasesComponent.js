import { getRecentReleases } from '../utils/api.js';

function RecentReleasesComponent() {
    const recentReleasesSection = document.getElementById('recent-releases-list');

    getRecentReleases()
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
                recentReleasesSection.appendChild(docCard);
            });
        })
        .catch(error => console.error('Erro ao carregar lançamentos recentes:', error));
}

document.addEventListener('DOMContentLoaded', RecentReleasesComponent);
