document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    const entries = formData.entries();
    const data = Object.fromEntries(entries);


    const dataString = JSON.stringify(data);
    const p = document.createElement("p");
    p.innerText = dataString;
    document.body.appendChild(p);
}

   