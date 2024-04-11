<button id="back-to-top">Back</button>
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


    document.addEventListener("DOMContentLoaded", function() {
        const modalOverlay = document.getElementById("modalOverlay");
        const closeModal = document.getElementById("closeModal");

        modalOverlay.style.display = "flex";

        closeModal.addEventListener("click", function() {
            modalOverlay.style.display = "none";
        });
    });
