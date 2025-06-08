//Rive Scripts
const canvas = document.getElementById("bleuLogo");
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.offsetWidth * dpr;
canvas.height = canvas.offsetHeight * dpr;

    const r = new rive.Rive({
        src: "/images/logo-bleu.riv",
        canvas: canvas,
        autoplay: true,
        stateMachines: "State Machine 1",
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
    });

//Handle form visibility based on URL hash
document.addEventListener('DOMContentLoaded', function () {
    function showFormFromHash() {
        // Hide both forms by default
        document.getElementById('start').classList.add('hidden');
        document.getElementById('demo').classList.add('hidden');
        // Show the form matching the hash and scroll to it
        if (location.hash === '#start') {
            const form = document.getElementById('start');
            form.classList.remove('hidden');
            setTimeout(() => {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 10); // Timeout ensures the form is visible before scrolling
        }
        if (location.hash === '#demo') {
            const form = document.getElementById('demo');
            form.classList.remove('hidden');
            setTimeout(() => {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 10);
        }
    }
    // Run on page load
    showFormFromHash();
    // Run on hash change
    window.addEventListener('hashchange', showFormFromHash);
});