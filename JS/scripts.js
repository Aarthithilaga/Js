document.addEventListener('DOMContentLoaded', function() {
    const planets = document.querySelectorAll('.planet');
    const orbits = document.querySelectorAll('.orbit');

    const orbitSpeeds = [
        0.04,   // Mercury
        0.03,   // Venus
        0.02,   // Earth
        0.015,  // Mars
        0.01,   // Jupiter
        0.007,  // Saturn
        0.005,  // Uranus
        0.003   // Neptune
    ];
    function movePlanets() {
        for (let i = 0; i < planets.length; i++) {
            const angle = orbitSpeeds[i] * Date.now();
            const radius = parseInt(orbits[i].offsetWidth) / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            planets[i].style.transform = `translate(${x}px, ${y}px)`;
        }

        requestAnimationFrame(movePlanets);
    }

    movePlanets();
});

function openPopup(planet) {
    const videoUrls = {
        mercury:"https://www.youtube.com/embed/0KBjnNuhRHs",
        venus: "https://www.youtube.com/embed/BvXa1n9fjow",
        earth: "https://www.youtube.com/embed/HCDVN7DCzYE",
        mars: "https://www.youtube.com/embed/D8pnmwOXhoY",
        jupiter:"https://www.youtube.com/embed/PtkqwslbLY8",
        saturn:"https://www.youtube.com/embed/epZdZaEQhS0",
        uranus:"https://www.youtube.com/embed/m4NXbFOiOGk",
        neptune:"https://www.youtube.com/embed/NStn7zZKXfE",
        sun:"https://www.youtube.com/embed/2HoTK_Gqi2Q"
    };
    

    const videoUrl = videoUrls[planet];
    const videoContainer = document.getElementById("video");
    videoContainer.src = videoUrl;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    const videoContainer = document.getElementById("video");
    videoContainer.src = "";
    document.getElementById("popup").style.display = "none";
}