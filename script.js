
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const countriesContainer = document.querySelector('.countries');

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');

        const countryName = country.name.common;
        const countryPopulation = country.population;
        const countryRegion = country.region;
        const countryCapital = country.capital ? country.capital[0] : 'N/A';
        const countryFlag = country.flags.svg;

        countryCard.innerHTML = `
          <img src="${countryFlag}" alt="${countryName}">
          <h2>${countryName}</h2>
          <p><strong>Population:</strong> ${countryPopulation}</p>
          <p><strong>Region:</strong> ${countryRegion}</p>
          <p><strong>Capital:</strong> ${countryCapital}</p>
        `;

        countriesContainer.appendChild(countryCard);
      });
    })
    .catch(error => {
      console.error('Error fetching countries:', error);
    });
});
