let seatData = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateSeats() {
    const students = [
        "Abram", "Jovan", "Allura", "Melvin", "Olive", "Dhea", "Naya", "Noel",
        "Alena", "Nuel", "Evelyn", "Dimas", "Ella", "Tristan", "Oneil", "Hizkia",
        "Kamila", "Jeje", "Jessica", "Richelle", "Joan", "Kanaya", "Laudya",
        "Richie", "Jova", "Reynard", "Michael", "Mitha", "Nicho", "Villa",
        "Samuel", "Gratias", "Russel", "Kierana", "Kenzie", "Jagat"
    ];

    const restricted = ["Jeje", "Richie", "Michael", "Villa"];
    const unrestricted = students.filter(s => !restricted.includes(s));

    shuffle(unrestricted);

    const seats1to9 = restricted.concat(unrestricted.slice(0, 14));
    shuffle(seats1to9);

    const seats10to18 = unrestricted.slice(14);
    shuffle(seats10to18);

    const allStudents = seats1to9.concat(seats10to18);

    const output = document.getElementById("output");
    output.innerHTML = "";
    seatData = [];

    for (let i = 0; i < 18; i++) {
        const p1 = allStudents[i * 2];
        const p2 = allStudents[i * 2 + 1];

        const text = `${i + 1}. ${p1} - ${p2}`;
        seatData.push(text);

        const div = document.createElement("div");
        div.className = "seat";
        div.textContent = text;
        output.appendChild(div);
    }
}

function copyToClipboard() {
    if (seatData.length === 0) {
        alert("Acak terlebih Dahulu!");
        return;
    }

    const text = seatData.join("\n");

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Berhasil Tercopy!");
}
