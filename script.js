const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector(".form");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter your cutie's name first 😏");
        return;
    }

    // Hide the form
    form.style.display = "none";

    // Create process display area
    const processBox = document.createElement("div");
    processBox.classList.add("processBox");
    processBox.style.textAlign = "center";
    processBox.style.color = "white";
    processBox.style.fontSize = "18px";
    processBox.style.fontWeight = "500";
    processBox.style.minHeight = "200px";
    processBox.style.marginTop = "20px";
    content.appendChild(processBox);

    const steps = [
        { text: "Analyzing name vibrations... 🔮", delay: 1000 },
        { text: "Matching cosmic energies... ✨", delay: 1500 },
        { text: "Reading aura and frequency... 🧘‍♂️", delay: 2000 },
        { text: "Checking your chat history... 💬", delay: 5500 }, // long pause
        { text: "Cross-verifying social media likes... ❤️", delay: 1500 },
        { text: "Consulting AI-powered love oracle... 🤖", delay: 1500 },
    ];

    const roasts = [
        "Bro, even ChatGPT couldn’t find any signs of her liking you 💀",
        "Result: 0% chance. But 100% delusion 😭",
        "AI says focus on syllabus, not her stories 📚",
        "Cupid just unmatched you 😬",
        "Love server crashed… because she blocked you 😔",
        "Bro, she’s talking to someone else rn 💬💔",
        "Result: You’re the only one in this relationship 😂",
        "AI suggests: uninstall Instagram, start meditation 🧘‍♂️",
        "AI scanned your aura… it’s giving main character with side-character luck.",
        "Destiny said: ‘I tried my best… but not with these two.’ 💀”",
        "AI ran your crush’s name… and the system said: ‘Bro, aim lower 💀'",
        "According to our analysis, your crush thinks of you every night — while blocking spam.",
        "Even ChatGPT refused to ship you both — said it violates logic.",
        "Bro, even ChatGPT ran diagnostics twice — no signs of mutual feelings detected 💀",
        "AI calculated the probability of her liking you: 0.0000001% (and that's optimism) 😭",
        "Cupid said ‘Bro chill, she doesn’t even know your existence’ 💘🚫",
        "Love radar found nothing but friendzone frequency 📡💔",
        "Result: She smiled at everyone like that, not just you 😭",
        "AI says focus on syllabus, not her DP updates 📚📱",
        "Bro, she calls you ‘bro’… it’s over before it started 😬",
        "AI detected 7 ‘seen’ messages, 0 replies 💬💀",
        "Love server crashed because she blocked your vibes 😔",
        "Even Google couldn’t find your chance with her 🔍💔",
        "She typed ‘haha’ with 2 letters, not 3… that’s a red flag 🚩",
        "Bro, her status isn’t about you… stop overthinking 😩",
        "AI confirms: You’re deep in the friendzone ocean 🌊😭",
        "Result: You’re the only one writing this love story 📝💔",
        "Even astrology said ‘Nah bro, wrong star alignment’ 🌠",
        "AI ran 10 simulations — all ended with ‘better luck next crush’ 🤡",
        "Cupid unfriended you after checking the data 💘❌",
        "Love algorithm says: focus on career, she’s already taken 💼❤️",
        "Her chat reply delay = your emotional damage timer ⏳😵",
        "AI suggests uninstalling Instagram, reinstalling self-respect 🧘‍♂️",
        "Bro, her ‘seen’ hit harder than physics numericals 💀📚”",
        "Result: 99% ignored, 1% false hope 🔥”",
    ];

    let index = 0;
    let percent = 0;

    function showNextStep() {
        if (index < steps.length) {
            const step = steps[index];
            processBox.innerHTML = `<p>${step.text}</p><p>${percent}% completed...</p>`;
            percent += Math.floor(Math.random() * 15) + 10;

            setTimeout(() => {
                index++;
                showNextStep();
            }, step.delay);
        } else {
            // Final roast screen
            const randomRoast =
                roasts[Math.floor(Math.random() * roasts.length)];
            processBox.innerHTML = `
                <div style="
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(4px);
                    padding: 30px;
                    border-radius: 20px;
                    margin-top: 30px;
                    box-shadow: 0 0 10px rgba(255, 0, 65, 0.4);
                    ">
                    <h2 style="color:#ff0041; font-size:32px;">Chal ja padh le 😂</h2>
                    <p style="margin-top:15px; font-size:20px;">${randomRoast}</p>
                    <p style="margin-top:15px; font-size:16px; color:#ffb6c1;">AI Verdict for "${name}" completed ✅</p>
                    <button id="againBtn" style="
                        margin-top:20px;
                        padding:8px 16px;
                        background:#ff0041;
                        border:none;
                        border-radius:20px;
                        color:white;
                        font-size:18px;
                        cursor:pointer;
                    ">Check Again</button>
                </div>
            `;

            // Add functionality to Check Again button
            const againBtn = document.querySelector("#againBtn");
            againBtn.addEventListener("click", () => {
                processBox.remove();
                form.style.display = "flex";
                input.value = "";
            });
        }
    }

    showNextStep();
});
