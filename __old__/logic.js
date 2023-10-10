"use strict";

const themeBtn = document.querySelector(".btn-toggle");
themeBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("theme-light");
    body.classList.toggle("theme-dark");
    const moonIcon = document.querySelector(".fa-moon");
    moonIcon.classList.toggle("fa-regular");
    moonIcon.classList.toggle("fa-solid");
})

const API_PATH = "https://restcountries.com/v3.1/all";

async function fetchData(url){
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res;
}

async function fetchCountries(url){
    try {
        console.warn("making restcountries request")
        const res = await fetchData(url)
        const resObj = await res.json();
        return resObj;
    } catch (error) {
        return(error.message);
    }
}

function createCountryCard(countryObj){
    const img = countryObj.flags.svg;
    const imgAlt = countryObj.flags.alt;
    const name = countryObj.name.common;
    const population = countryObj.population.toLocaleString("en-US");
    const region = countryObj.region;
    const capital = countryObj.capital;

    const htmlString = `
                    <div class="img-container">
                        <img src="${img}" alt="${imgAlt}">
                    </div>
                    <h2 class="country-name">${name}</h2>
                    <dl>
                        <div>
                            <dt>Population: </dt>
                            <dd class="population">${population}</dd>
                        </div>
                        <div>
                            <dt>Region: </dt>
                            <dd class="region">${region}</dd>
                        </div>
                        <div>
                            <dt>Capital: </dt>
                            <dd class="capital">${capital}</dd>
                        </div>
                    </dl>`;

    const newDiv = document.createElement('div');
    newDiv.classList.add("card");
    newDiv.innerHTML = htmlString;
    return newDiv;
}

async function main(){
    const countries = await fetchCountries(API_PATH);
    console.log(countries);
    for(let i=0; i<10; i++){
        let newDiv = createCountryCard(countries[i]);
        document.querySelector("#country-cards-container").appendChild(newDiv);
    }
}

main();
