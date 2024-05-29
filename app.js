document.addEventListener("DOMContentLoaded", () => {
    const panel = document.querySelector('.panel');

    const getAdvice = async () => {
        try {
            const res = await fetch("https://api.adviceslip.com/advice");
            const data = await res.json();
            return data.slip;
        } catch (e) {
            console.error("Oops error:", e);
        }
    };

    panel.addEventListener("submit", async (e) => {
        e.preventDefault();
        const adviceIdElement = document.querySelector('#advice-id');
        const adviceTextElement = document.querySelector('#advice-text');
        const advice = await getAdvice();
        if (advice) {
            adviceIdElement.textContent = advice.id;
            adviceTextElement.textContent = `"${advice.advice}"`;
        }
    });
});
