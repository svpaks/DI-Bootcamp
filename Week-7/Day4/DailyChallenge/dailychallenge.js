// Instructions
// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
//    - Be careful, each planet has a certain amount of moons. How should you display them?
//    - Should you still use an array for the planets ? Or an array of objects ?

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const planetDivs = []; // an empty array to store the planet div elements
planets.forEach((planet) => {
  const planetDiv = document.createElement("div"); // a div element for the planet
  planetDiv.classList.add("planet");
  planetDivs.push(planetDiv); // add the planet div to the array
});

const planetsSection = document.getElementById("planetsSection");

planets.forEach((planet, index) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  const planetClass = `planet-${index + 1}`;
  planetDiv.classList.add(planetClass);
  planetDiv.textContent = planet;

  // Append the planet div to the planets section
  planetsSection.appendChild(planetDiv);
});

// BONUS

const planets2 = [
  {
    name: "Mercury",
    moons: ["Moon of Mercury 1", "Moon of Mercury 2"],
  },
  {
    name: "Venus",
    moons: ["Moon of Venus 1", "Moon of Venus 2", "Moon of Venus 3"],
  },
];

const planetsSection2 = document.getElementById("planetsSection2");

planets.forEach((planet, index) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  const planetClass = `planet-${index + 1}`;
  planetDiv.classList.add(planetClass);
  planetDiv.textContent = planet.name;

  // Create a separate div to display the moons
  const moonsDiv = document.createElement("div");
  moonsDiv.classList.add("moons");
  planet.moons.forEach((moon) => {
    const moonDiv = document.createElement("div");
    moonDiv.textContent = moon;
    moonsDiv.appendChild(moonDiv);
  });

  // Append the moons div to the planet div
  planetDiv.appendChild(moonsDiv);

  // Append the planet div to the planets section
  planetsSection.appendChild(planetDiv);
});
