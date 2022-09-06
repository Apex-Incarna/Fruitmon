// Get each Fruit Img
cAnetelopeImg = document.getElementById("cAnetelopeImg");
bikerGangImg = document.getElementById("bikerGangImg");
spineappleImg = document.getElementById("spineappleImg");
falseStrImg = document.getElementById("falseStrImg");
bananarangImg = document.getElementById("bananarangImg");
figsImg = document.getElementById("figsImg");
waterFelonImg = document.getElementById("waterFelonImg");
dragonFruitImg = document.getElementById("dragonFruitImg");
ninjaKiwiImg = document.getElementById("ninjaKiwiImg");

// Get each Fruit Showcase
cAnetelopeImg.affect = document.getElementById("cAnetelope");
bikerGangImg.affect = document.getElementById("bikerGang");
spineappleImg.affect = document.getElementById("spineapple");
falseStrImg.affect = document.getElementById("falseStr");
bananarangImg.affect = document.getElementById("bananarang");
figsImg.affect = document.getElementById("figs");
waterFelonImg.affect = document.getElementById("waterFelon");
dragonFruitImg.affect = document.getElementById("dragonFruit");
ninjaKiwiImg.affect = document.getElementById("ninjaKiwi");

// Add event listeners to each Fruit Img
cAnetelopeImg.addEventListener("click", show);
bikerGangImg.addEventListener("click", show);
spineappleImg.addEventListener("click", show);
falseStrImg.addEventListener("click", show);
bananarangImg.addEventListener("click", show);
figsImg.addEventListener("click", show);
waterFelonImg.addEventListener("click", show);
dragonFruitImg.addEventListener("click", show);
ninjaKiwiImg.addEventListener("click", show);

// When a Fruit Img is pressed, display the coresponding Showcase
function show(event) {
    cAnetelopeImg.affect.style.display = "none";
    bikerGangImg.affect.style.display = "none";
    spineappleImg.affect.style.display = "none";
    falseStrImg.affect.style.display = "none";
    bananarangImg.affect.style.display = "none";
    figsImg.affect.style.display = "none";
    waterFelonImg.affect.style.display = "none";
    dragonFruitImg.affect.style.display = "none";
    ninjaKiwiImg.affect.style.display = "none";
    showcase = event.currentTarget.affect;
    showcase.style.display = "block";
}

