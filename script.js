document.addEventListener("DOMContentLoaded", function () {

    //Uppgift 4 : Hämta element och spara i variabler 
    const checkbox = document.querySelector(".checkbox"); // Variabel 1
    const textfields = document.getElementsByClassName("textfield"); // Variabel 2
    const button = document.getElementById("removeBtn"); // Variabel 3
    const outputDiv = document.getElementById("output"); // Variabel 4


    //Uppgift 5 : Funktion som eventlyssnare
    function handleInput(e) {
        console.log("Avsändare (target):", e.target);

        const fieldName = e.target.name;
        console.log("Name-attribut:", fieldName);

        if (fieldName === "content") {
            outputDiv.innerHTML = e.target.value;
        }
    }


    //Uppgift 6 : Eventlyssnare 

    //Textfälten lyssna när man skriver
    for (let field of textfields) {
        field.addEventListener("input", handleInput);
    }

    //Checkbox ändra bakgrundsfärg på div
    checkbox.addEventListener("change", function () {
        const colorInput = textfields[0].value;
        outputDiv.style.backgroundColor = colorInput;
    });

    // Knapp Radera
    button.addEventListener("click", function () {
        outputDiv.remove();
    });

});
