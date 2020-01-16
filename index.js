window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function recursy(element) {
        element.childNodes.forEach(node => {
            console.log(node)

            if (element.nodeName.match(/^H\d/)) {
                textNodes.push(node.textContent)
            } else {
                console.log(node)
                recursy(node)
            }
        })
    }
    recursy(body)

    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
        .then(response => response.json())
        .then(json => console.log(json))
});