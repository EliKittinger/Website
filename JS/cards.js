const template = document.querySelector(".template");
const projectsList = document.getElementById("projects-list");

const cards = {
    [0]: {
        "title": "CMDFace",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft library for Spigot API designed to make initialization and sorting of commands and subcommands both more efficient and modular."
    },
    [1]: {
        "title": "Website",
        "link": 'https://github.com/EliKittinger/Website',
        "imageKey": "Assets/Images/Website.png",
        "desc": "My personal website, written in HTML, JavaScript, and CSS."
    }
};


function cloneCard() {
    const card = template.cloneNode(true);
    card.classList.remove("template");
    card.classList.add("projects-button");
    card.removeAttribute("onclick");
    return card
}

for (let key in cards) {
    const newcard = cloneCard();
    newcard.querySelector("img").src = cards[key].imageKey;
    newcard.querySelector("img").alt = cards[key].title;
    newcard.querySelector("h2").textContent = cards[key].title;
    newcard.querySelector("p").textContent = cards[key].desc;
    if (cards[key].link) {
        newcard.onclick = () => window.location.href = cards[key].link;
    }
    projectsList.appendChild(newcard);
}