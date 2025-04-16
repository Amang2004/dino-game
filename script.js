const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");

    function jump() {
        if (!dino.classList.contains("jump")) {
            dino.classList.add("jump");

            setTimeout(function () {
                dino.classList.remove("jump");
            }, 300);
        }
    }

    document.addEventListener("keydown", function (event) {
        jump();
    });

    let isAlive = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 70 && cactusLeft > 0 && dinoTop < 40) {
            alert("💥 Game Over!");
            // Reload the game
            window.location.reload();
        }
    }, 10);