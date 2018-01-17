// Data

const presidents = [
    { name: "George Washington", state: "Virginia", party: "Unaffiliated" },
    { name: "John Adams", state: "Massachusetts", party: "Federalist" },
    { name: "Thomas Jefferson", state: "Virginia", party: "Democratic-Republican" },
    { name: "James Madison", state: "Virginia", party: "Democratic-Republican" },
    { name: "James Monroe", state: "Virginia", party: "Democratic-Republican" },
    { name: "John Quincy Adams", state: "Massachusetts", party: "Democratic-Republican" },
    { name: "Andrew Jackson", state: "South/North Carolina", party: "Democratic" },
    { name: "Martin Van Buren", state: "New York", party: "Democratic" },
    { name: "William Henry Harrison", state: "Virginia", party: "Whig" },
    { name: "John Tyler", state: "Virginia", party: "Whig/Unaffiliated" },
    { name: "James K. Polk", state: "North Carolina", party: "Democratic" },
    { name: "Zachary Taylor", state: "Virginia", party: "Whig" },
    { name: "Millard Fillmore", state: "New York", party: "Whig" },
    { name: "Franklin Pierce", state: "New Hampshire", party: "Democratic" },
    { name: "James Buchanan", state: "Pennsylvania", party: "Democratic" },
    { name: "Abraham Lincoln", state: "Kentucky", party: "Republican/National Union" },
    { name: "Andrew Johnson", state: "North Carolina", party: "National Union/Democratic" },
    { name: "Ulysses S. Grant", state: "Ohio", party: "Republican" },
    { name: "Rutherford B. Hayes", state: "Ohio", party: "Republican" },
    { name: "James A. Garfield", state: "Ohio", party: "Republican" },
    { name: "Chester A. Arthur", state: "Vermont", party: "Republican" },
    { name: "Grover Cleveland", state: "New Jersey", party: "Democratic" },
    { name: "Benjamin Harrison", state: "Ohio", party: "Republican" },
    { name: "Grover Cleveland", state: "New Jersey", party: "Democratic" },
    { name: "William McKinley", state: "Ohio", party: "Republican" },
    { name: "Theodore Roosevelt", state: "New York", party: "Republican" },
    { name: "William H. Taft", state: "Ohio", party: "Republican" },
    { name: "Woodrow Wilson", state: "Virginia", party: "Democratic" },
    { name: "Warren G. Harding", state: "Ohio", party: "Republican" },
    { name: "Calvin Coolidge", state: "Vermont", party: "Republican" },
    { name: "Herbert Hoover", state: "Iowa", party: "Republican" },
    { name: "Franklin D. Roosevelt", state: "New York", party: "Democratic" },
    { name: "Harry S. Truman", state: "Missouri", party: "Democratic" },
    { name: "Dwight D. Eisenhower", state: "Texas", party: "Republican" },
    { name: "John F. Kennedy", state: "Massachusetts", party: "Democratic" },
    { name: "Lyndon B. Johnson", state: "Texas", party: "Democratic" },
    { name: "Richard Nixon", state: "California", party: "Republican" },
    { name: "Gerald Ford", state: "Nebraska", party: "Republican" },
    { name: "Jimmy Carter", state: "Georgia", party: "Democratic" },
    { name: "Ronald Reagan", state: "Illinois", party: "Republican" },
    { name: "George H. W. Bush", state: "Massachusetts", party: "Republican" },
    { name: "Bill Clinton", state: "Arkansas", party: "Democratic" },
    { name: "George W. Bush", state: "Connecticut", party: "Republican" },
    { name: "Barack Obama", state: "Hawaii", party: "Democratic" },
    { name: "Donald Trump", state: "New York", party: "Republican" }
];

// End Data

const questionNumbers = [];
for (let i = 0; i < 3; i++) {
    questionNumbers.push(getRandomInt(1, presidents.length - 1));
}

let score = 0;

// Main Game Loop
for (const num of questionNumbers) {
    const response = ask(presidents[num].name);

    check(response, presidents[num]);
}
// End Main Game Loop

gameOver(questionNumbers.length);

// Functions

function ask(name) {
    return prompt(`Which state was ${name} born in?`);
}

function check(response, president) {
    if (response === president.state) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong! ' + president.name + ' was born in ' + president.state);
    }
}

function gameOver(numQuestions) {
    alert('Game over. You scored ' + score + ' point' + (score !== 1 ? 's' : '') + ' out of ' + numQuestions);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
