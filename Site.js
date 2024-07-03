document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".page-section");

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-target");
            showSection(targetId);
        });
    });

    // Mostrar a seção inicial (home)
    showSection("home");

    // Adicionar funcionalidade ao formulário de rastreamento
    document.querySelector("#rastreamento form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Rastreamento não disponível no momento.");
    });

    // Adicionar funcionalidade ao formulário de contato
    document.querySelector("#contato form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });
});
