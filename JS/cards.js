const template = document.querySelector(".template");
const popup = document.querySelector("#popup");
const projectsList = document.getElementById("projects-list");
const popupTitle = popup.querySelector("h2");
const popupImage = popup.querySelector("img");
const popupButton = popup.querySelector("button");
const popupCard = popup.querySelector("div");

const cards = [
    {
        "title": "CMDFace",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft library for Spigot API designed to make initialization and sorting of commands and subcommands both more efficient and modular."
    },
    {
        "title": "GuestList",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft Spigot plugin implementing CMDFace and SQLite to let server administrators safely put the power of whitelisting into the hands of the players."
    },
    {
        "title": "Portfolio Website",
        "link": 'https://github.com/EliKittinger/Website',
        "imageKey": "Assets/Images/Website.png",
        "desc": "My personal website, written in HTML, JavaScript, and CSS."
    },
    {
        "title": "CMDFace",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft library for Spigot API designed to make initialization and sorting of commands and subcommands both more efficient and modular."
    },
    {
        "title": "GuestList",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft Spigot plugin implementing CMDFace and SQLite to let server administrators safely put the power of whitelisting into the hands of the players."
    },
    {
        "title": "Portfolio Website",
        "link": 'https://github.com/EliKittinger/Website',
        "imageKey": "Assets/Images/Website.png",
        "desc": "My personal website, written in HTML, JavaScript, and CSS."
    },
    {
        "title": "CMDFace",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft library for Spigot API designed to make initialization and sorting of commands and subcommands both more efficient and modular."
    },
    {
        "title": "GuestList",
        "link": 'https://github.com/Rocket-Plugins/cmdface',
        "imageKey": "Assets/Images/rocketPlugins.png",
        "desc": "A Java Minecraft Spigot plugin implementing CMDFace and SQLite to let server administrators safely put the power of whitelisting into the hands of the players."
    },
    {
        "title": "Portfolio Website",
        "link": 'https://github.com/EliKittinger/Website',
        "imageKey": "Assets/Images/Website.png",
        "desc": "My personal website, written in HTML, JavaScript, and CSS."
    }
];



function cloneCard() {
    const card = template.cloneNode(true);
    card.classList.remove("template");
    card.classList.add("projects-button");
    card.removeAttribute("onclick");
    return card
}

function enablePopup(cardData) {
    popup.style.animation = "";
    popupCard.style.animation = "";
    popupTitle.textContent = cardData.title;
    popupImage.src = cardData.imageKey;
    popupImage.alt = cardData.title;
    popupButton.onclick = () => {
        window.open(cardData.link, "_blank", "noopener,noreferrer");
    };
    popup.style.display = "grid";
    popup.style.visibility = "visible";
}

function closePopup() {
    if (popup.style.display === "none") {
        return;
    }

    popup.style.animation = "popup-fade-out 250ms ease-in forwards";
    popupCard.style.animation = "popup-card-fade-out 250ms ease-in forwards";
}

popup.addEventListener("animationend", (event) => {
    if (event.target === popup && event.animationName === "popup-fade-out") {
        popup.style.display = "none";
        popup.style.visibility = "hidden";
        popup.style.animation = "";
        popupCard.style.animation = "";
    }
})

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});

for (const cardData of cards) {
    const newcard = cloneCard();
    newcard.querySelector("img").src = cardData.imageKey;
    newcard.querySelector("img").alt = cardData.title;
    newcard.querySelector("h2").textContent = cardData.title;
    newcard.querySelector("p").textContent = cardData.desc;
    if (cardData.link) {
        newcard.onclick = () => enablePopup(cardData);
    }
    projectsList.appendChild(newcard);
}