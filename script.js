document.addEventListener("DOMContentLoaded", function () {
    const simulator = document.getElementById('macSimulator');
    const desktopIcons = document.getElementById('desktopIcons');
    const appIcons = document.querySelectorAll('.app-icon');
    const macWindow = document.getElementById('macWindow');
    const appFrame = document.getElementById('appFrame');
    const appImage = document.getElementById('appImage');
    const winTitle = document.getElementById('winTitle');
    const winClose = document.getElementById('winClose');
    const screenElement = document.querySelector('.screen');

    // Boot animation logic trigger
    screenElement.classList.add('anime');

    // Simulator load detect hone par icons fade-in honge
    simulator.addEventListener('load', function() {
        setTimeout(() => {
            desktopIcons.classList.add('loaded');
        }, 1000); 
    });

    // Fallback security trigger
    setTimeout(() => {
        desktopIcons.classList.add('loaded');
    }, 2500);

    // Dynamic Apps Launcher (Handles both Websites and QR Image)
    appIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.stopPropagation(); // Block clicks to background simulator
            
            const url = this.getAttribute('data-url');
            const name = this.getAttribute('data-name');
            const type = this.getAttribute('data-type');
            
            winTitle.textContent = name;

            if (type === "image") {
                // QR code image element me source inject karein
                appFrame.style.display = "none";
                appImage.style.display = "block";
                appImage.src = url;
            } else {
                // Regular URLs iframe me inject karein
                appImage.style.display = "none";
                appFrame.style.display = "block";
                appFrame.src = url;
            }
            
            // Pop the window cleanly inside screen boundaries
            macWindow.classList.add('open');
        });
    });

    // Close Tab Window Logic
    winClose.addEventListener('click', function (e) {
        e.stopPropagation();
        macWindow.classList.remove('open');
        appFrame.src = ""; 
        appImage.src = "bcd.gif";
    });
});