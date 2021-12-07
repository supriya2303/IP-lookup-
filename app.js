const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const cityDisplay = document.querySelector(".city-display");
const regionDisplay = document.querySelector(".region-display");
const region_codeDisplay = document.querySelector(".region_code-display");
const country_nameDisplay = document.querySelector(".country_name-display");
const country_codeDisplay = document.querySelector(".country_code-display");
const continent_nameDisplay = document.querySelector(".continent_name-display");
const continent_codeDisplay = document.querySelector(".continent_code-display");
const latitudeDisplay = document.querySelector(".latitude-display");
const longitudeDisplay = document.querySelector(".longitude-display");
const timezoneDisplay = document.querySelector(".timezone-display");
const currencyDisplay = document.querySelector(".currency-display");
const currency_nameDisplay = document.querySelector(".currency_name-display");
const country_populationDisplay = document.querySelector(".country_population-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");

lookupBtn.addEventListener("click", () => {
    loader.style.display ="flex";
    details.style.display ="none";

  axios.get("https://ipapi.co/json/").then((response) => {
    
    
    loader.style.display="none";
    details.style.display ="block";

    ipDisplay.textContent=`Ip address: ${response.data.ip}` ;

    cityDisplay.textContent = `City: ${response.data.city} `;
  
    regionDisplay.textContent = `Region: ${response.data.region}`;

    region_codeDisplay.textContent = `Region code: ${response.data.region_code} `;

    country_nameDisplay.textContent = `Country name: ${response.data.country_name} `;

    country_codeDisplay.textContent = `Country code: ${response.data.country_code} `;

    continent_nameDisplay.textContent = `Continent name: ${response.data.continent_name}  `;

    continent_codeDisplay.textContent = `Continent code: ${response.data.continent_code}  `;

    latitudeDisplay.textContent = `Latitude: ${response.data.latitude}`;

    longitudeDisplay.textContent = `Longitude: ${response.data.longitude}`;

    timezoneDisplay.textContent = `Timezone: ${response.data.timezone} `;

    currencyDisplay.textContent = `Currency: ${response.data.currency}`;

    currency_nameDisplay.textContent = `Currency name: ${response.data.currency_name}`;

    country_populationDisplay.textContent = `Country population: ${response.data.country_population}`;

  });
});
