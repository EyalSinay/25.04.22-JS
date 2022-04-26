const img = document.querySelector('img');

img.onclick = () => {
    if(img.src.includes("Off")){
        img.src = "./Anonymous_Lightbulb_Lit.png";
    } else if (img.src.includes("Lit")) {
        img.src = "./Anonymous_Lightbulb_Off.png";
    }
}