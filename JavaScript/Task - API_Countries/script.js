const URL = "https://restcountries.com/v3.1/all?fields=name,flags";
const countriesDiv = document.querySelector("#countries");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  getFacts();
});

const getFacts = async () => {
  let response = await fetch(URL);
  let data = await response.json();

  data.forEach((country) => {
    const countryName = country.name.common;
    const countryFlag = country.flags.png;
    const countryFlagAlt = country.flags.alt || countryName + " flag";

    const countryBox = document.createElement("div");
    countryBox.className = "country-box";

    const nameElement = document.createElement("h5");
    nameElement.textContent = countryName;

    const flagElement = document.createElement("img");
    flagElement.src = countryFlag;
    flagElement.alt = countryFlagAlt;

    countryBox.appendChild(nameElement);
    countryBox.appendChild(flagElement);

    countriesDiv.appendChild(countryBox);
  });
};

// getFacts();
