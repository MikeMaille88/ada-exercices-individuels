const app = require("./Motus.js");

describe("Guess function", () => {
    test('should update DOM elements correctly when winning', () => {
        // Set up the initial state of the DOM elements
        document.body.innerHTML = `
            <input type="text" id="word" value="dictionnaire">
            <div id="try"></div>
            <div id="well"></div>
            <div id="miss"></div>
            <div id="not"></div>
            <div id="win"></div>
        `;

        // Call the guess function
        app.guess();

        // Assertions
        expect(document.getElementById("try").innerText).toBe('dictionnaire');
        // Add more assertions for other DOM elements
        expect(document.getElementById("well").innerText).toBe('Bien placé: d, i, c, t, i, o, n, n, a, i, r, e');
        expect(document.getElementById("miss").innerText).toBe('Mal placé: ');
        expect(document.getElementById("not").innerText).toBe('Pas dans le mot: ');
        expect(document.getElementById("win").innerText).toBe('Vous avez gagné');
    });

    // Add more test cases here for different scenarios
    test('should update DOM elements correctly when winning', () => {
        // Set up the initial state of the DOM elements
        document.body.innerHTML = `
            <input type="text" id="word" value="cacahuete">
            <div id="try"></div>
            <div id="well"></div>
            <div id="miss"></div>
            <div id="not"></div>
            <div id="win"></div>
        `;

        // Call the guess function
        app.guess();

        // Assertions
        expect(document.getElementById("try").innerText).toBe('cacahuete');
        // Add more assertions for other DOM elements
        expect(document.getElementById("well").innerText).toBe('Bien placé: c');
        expect(document.getElementById("miss").innerText).toBe('Mal placé: c, a, a, e, t, e');
        expect(document.getElementById("not").innerText).toBe('Pas dans le mot: h, u');
        expect(document.getElementById("win").innerText).toBe(undefined);
    });
});

describe("tryWord function", () => {
    test('should return an object with 3 arrays', () => {
        let base = 'dictionnaire';
        let word = "cacahuete";

        expect(app.tryWord(word, base)).toStrictEqual({ wellPlaced: ["c"], missplaced: ["c", "a", "a", "e", "t", "e"], notInWord: ["h", "u"] });
        expect(app.tryWord(word, base)).toMatchObject({"missplaced": ["c", "a", "a", "e", "t", "e"], "notInWord": ["h", "u"], "wellPlaced": ["c"]});
    })
})