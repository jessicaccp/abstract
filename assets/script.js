// header logo
const headerLogo = document.getElementById('logo');
const headerLogoContainer = document.getElementById('logo-container');
const headerLogoName = document.getElementById('logo-name');

headerLogo.addEventListener("mouseover", (event) => {
    headerLogoContainer.style.backgroundColor = 'var(--main-light)';
    headerLogoName.style.color = 'var(--main-light)';
});

headerLogo.addEventListener("mouseleave", (event) => {
    headerLogoContainer.style.backgroundColor = 'var(--neutral-light)';
    headerLogoName.style.color = 'var(--neutral-light)';
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