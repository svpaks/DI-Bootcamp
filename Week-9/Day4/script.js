
// ADD BUTTON SUBMIT
const button = document.getElementById("btn_search"); // we create a button named "submit" taking it from hte HTML by ID
button.addEventListener("click", getPerson) // we add the action named "click" to add somebody from the link below by using function "getPerson"

// FUNCTION TO GET ANY PERSON
async function getPerson() { // we create the function, which allows us to add the STAR WARS character 
    const personInfo = document.getElementById("person_info"); // we create the area with the info about STAR WARS character
    console.log(personInfo);
    try {
        const number = Math.floor(Math.random() * 84) + 1; // we create a way to choose the character randomly with the build-in math function
        const response = await fetch(`https://www.swapi.tech/api/people/${number}`); // we create 

        if (response.ok) {
            const starwarsdata = await response.json();
            const name = starwarsdata.result.properties["name"]
            const height = starwarsdata.result.properties["height"]
            const gender = starwarsdata.result.properties["gender"]
            const birth_year = starwarsdata.result.properties["birth year"]
            const homeworldUrl = starwarsdata.result.properties["homeworld"] //https://www.swapi.tech/api/planets/31
            console.log(homeworldUrl);

            const homeworldResponse = await fetch(homeworldUrl); //https://www.swapi.tech/api/planets/31
            const homeworldData = await homeworldResponse.json();
            const homeworld = homeworldData.result.properties["name"];
            console.log(homeworld);


        // CREATE DOM ELEMENTS
        const title = document.createElement("h2");
        title.textContent = name;

        const heightParagraph = document.createElement("p");
        heightParagraph.textContent = `<strong>height:</strong> ${height}`;

        const genderParagraph = document.createElement("p");
        genderParagraph.textContent = `<strong>gender:</strong> ${gender}`;

        const birthYearParagraph = document.createElement("p");
        birthYearParagraph.textContent = `<strong>birth year:</strong> ${birth_year}`;

        const homeworldParagraph = document.createElement("p");
        homeworldParagraph.textContent = `<strong>homeworld:</strong> ${homeworld}`;

        // Append elements to personInfo div
        personInfo.appendChild(title);
        personInfo.appendChild(heightParagraph);
        personInfo.appendChild(genderParagraph);
        personInfo.appendChild(birthYearParagraph);
        personInfo.appendChild(homeworldParagraph);


        } else {
            console.log("in error");
            throw new Error ("That person isn't available")
        }
    } catch (error) {
        console.log("error");
    }
}


