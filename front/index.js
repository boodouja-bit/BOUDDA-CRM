const button = document.getElementById("testBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
    try {
        const response = await fetch("https://boudda-crm1.vercel.app/api/test");
        const data = await response.json();

        result.textContent = data.message;
    } catch (error) {
        console.error("Erreur :", error);
        result.textContent = "Backend non connecté";
    }
});
