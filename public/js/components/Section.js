import { Card } from '.components/Card.js';

export function Section(title, documentaries) {
    const sectionElement = document.createElement('section');
    sectionElement.innerHTML = `
        <h2>${title}</h2>
        <div class="section-list"></div>
    `;

    const listContainer = sectionElement.querySelector('.section-list');

    documentaries.forEach(doc => {
        const card = Card({ titulo: doc.titulo, descricao: doc.descricao });
        listContainer.appendChild(card);
    });

    return sectionElement;
}
