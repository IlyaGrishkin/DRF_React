

export const test = {
    text: 'сложный тест',
    questions: [
        {
            text: 'Who is painted?',
            globalId: 100,
            localId: 1,
            variants: [
                { id: 0, text: 'Van Gog', isRight: true },
                { id: 1, text: 'Lermontov', isRight: false },
                { id: 2, text: 'Da Vinci', isRight: false },
                { id: 3, text: 'Gogol', isRight: false },
            ]
        },
        {
            text: 'Question 2?',
            globalId: 237,
            localId: 2,
            variants: [
                { id: 0, text: 'Messi', isRight: true },
                { id: 1, text: 'Giroud', isRight: false },
                { id: 2, text: 'Ronaldo', isRight: false },
                { id: 3, text: 'Rodri', isRight: false }
            ]
        }
    ]
}

export function getAPIData() {
    return test;
}



export let results = [];

export function addAnswer(testID, questionID, answerID) {
    results.push([questionID, answerID]);
}


