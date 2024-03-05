// header
// reduce opacity of logo and name when hover

const headerLogo = document.getElementById('header-logo');
const headerName = document.getElementById('header-name');

headerLogo.addEventListener("mouseover", (event) => {
    headerLogo.style.opacity = '0.8';
    headerName.style.opacity = '0.8';
});

headerLogo.addEventListener("mouseleave", (event) => {
    headerLogo.style.opacity = '1';
    headerName.style.opacity = '1';
});

headerName.addEventListener("mouseover", (event) => {
    headerLogo.style.opacity = '0.8';
    headerName.style.opacity = '0.8';
});

headerName.addEventListener("mouseleave", (event) => {
    headerLogo.style.opacity = '1';
    headerName.style.opacity = '1';
});

// search form
const searchForm = document.querySelector('#search form');
const searchInput = document.querySelector('#search input');
const searchButton = document.querySelector('#search button');

searchForm.addEventListener("mouseover", (event) => {
    searchForm.style.borderColor = 'var(--main-dark)';
    searchButton.style.color = 'var(--main-dark)';
});

searchForm.addEventListener("mouseleave", (event) => {
    if (document.activeElement !== searchInput) {
        searchForm.style.borderColor = 'var(--neutral-dark)';
    }
    searchButton.style.color = 'var(--neutral-dark)';
});

searchInput.addEventListener("focusin", (event) => {
    searchForm.style.borderColor = 'var(--main-dark)';
});

searchInput.addEventListener("focusout", (event) => {
    searchForm.style.borderColor = 'var(--neutral-dark)';
});