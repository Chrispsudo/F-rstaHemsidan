document.querySelector("h1").addEventListener("click", () => {
    alert("Du klickade på rubriken!");
});

document.querySelector('#welcome').addEventListener('click', () => {
    document.querySelector('#welcome').style.backgroundColor = '#e0ffe0';
});

document.getElementById('welcome').style.backgroundColor = '#e0ffe0';
