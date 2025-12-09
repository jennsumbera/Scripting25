console.log("We are linked");

function formSubmit() {
    let nature = document.getElementById("nature");
    let object = document.getElementById("object");
    let adjective = document.getElementById("adjective");
    let verb = document.getElementById("verb");
    let noun1 = document.getElementById("noun1");
    let clothing = document.getElementById("clothing");
    let animal = document.getElementById("animal");
    let noun = document.getElementById("noun");
    let exclamation = document.getElementById("exclamation");
    let number = document.getElementById("number");
    

    document.getElementById('story').innerHTML = "Our class went on a hiking trip to the famous " + nature.value + " expecting a calm day... But as soon as we started walking, our guide tripped over a " + object.value + " and accidentally led us down a " + adjective.value + " side trail... " + ". The path took us straight to a hidden camp where a group of explorers were practicing " + verb.value + " around a giant " + noun1.value + ". They invited us to join, but things went wild when someone released a " + animal.value + " that sprinted past us wearing a " + clothing.value + " . Our teacher told us to stay calm, but they slipped on " + noun.value + " and yelled " + exclamation.value + "! We finally made it back to the main trail- tired, muddy, and carrying " + number.value + " new stories we'll never live down."
















}
