export function Card({ titulo, descricao }) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    `;

    return cardElement;
}
