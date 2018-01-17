// Data

const states = [
    {name: "Alabama",capital: "Montgomery",largestCity: "Birmingham",abbreviation: "AL",lat: "32.3668052",lng: "-86.2999689"},
    {name: "Alaska",capital: "Juneau",largestCity: "Anchorage",abbreviation: "AK",lat: "58.3019444",lng: "-134.4197221"},
    {name: "Arizona",capital: "Phoenix",largestCity: "Phoenix",abbreviation: "AZ",lat: "33.4483771",lng: "-112.0740373"},
    {name: "Arkansas",capital: "Little Rock",largestCity: "Little Rock",abbreviation: "AR",lat: "34.7464809",lng: "-92.28959479999999"},
    {name: "California",capital: "Sacramento",largestCity: "Los Angeles",abbreviation: "CA",lat: "38.5815719",lng: "-121.4943996"},
    {name: "Colorado",capital: "Denver",largestCity: "Denver",abbreviation: "CO",lat: "39.7392358",lng: "-104.990251"},
    {name: "Connecticut",capital: "Hartford",largestCity: "Bridgeport",abbreviation: "CT",lat: "41.76371109999999",lng: "-72.6850932"},
    {name: "Delaware",capital: "Dover",largestCity: "Wilmington",abbreviation: "DE",lat: "39.158168",lng: "-75.5243682"},
    {name: "Florida",capital: "Tallahassee",largestCity: "Miami",abbreviation: "FL",lat: "30.4382559",lng: "-84.28073289999999"},
    {name: "Georgia",capital: "Atlanta",largestCity: "Atlanta",abbreviation: "GA",lat: "33.7489954",lng: "-84.3879824"},
    {name: "Hawaii",capital: "Honululu",largestCity: "Honululu",abbreviation: "HI",lat: "21.3069444",lng: "-157.8583333"},
    {name: "Idaho",capital: "Boise",largestCity: "Boise",abbreviation: "ID",lat: "43.6187102",lng: "-116.2146068"},
    {name: "Illinois",capital: "Springfield",largestCity: "Chicago",abbreviation: "IL",lat: "39.78172130000001",lng: "-89.6501481"},
    {name: "Indiana",capital: "Indianapolis",largestCity: "Indianapolis",abbreviation: "IN",lat: "39.768403",lng: "-86.158068"},
    {name: "Iowa",capital: "Des Moines",largestCity: "Des Moines",abbreviation: "IA",lat: "41.6005448",lng: "-93.6091064"},
    {name: "Kansas",capital: "Topeka",largestCity: "Wichita",abbreviation: "KS",lat: "39.0558235",lng: "-95.68901849999999"},
    {name: "Kentucky",capital: "Frankfort",largestCity: "Louisville",abbreviation: "KY",lat: "38.2009055",lng: "-84.87328350000001"},
    {name: "Louisiana",capital: "Baton Rouge",largestCity: "New Orleans",abbreviation: "LA",lat: "30.4582829",lng: "-91.1403196"},
    {name: "Maine",capital: "Augusta",largestCity: "Portland",abbreviation: "ME",lat: "44.3106241",lng: "-69.7794897"},
    {name: "Maryland",capital: "Annapolis",largestCity: "Baltimore",abbreviation: "MD",lat: "38.9784453",lng: "-76.4921829"},
    {name: "Massachusetts",capital: "Boston",largestCity: "Boston",abbreviation: "MA",lat: "42.3600825",lng: "-71.0588801"},
    {name: "Michigan",capital: "Lansing",largestCity: "Detroit",abbreviation: "MI",lat: "42.732535",lng: "-84.5555347"},
    {name: "Minnesota",capital: "St. Paul",largestCity: "Minneapolis",abbreviation: "MN",lat: "44.9537029",lng: "-93.0899578"},
    {name: "Mississippi",capital: "Jackson",largestCity: "Jackson",abbreviation: "MS",lat: "32.2987573",lng: "-90.1848103"},
    {name: "Missouri",capital: "Jefferson City",largestCity: "Kansas City",abbreviation: "MO",lat: "38.57670170000001",lng: "-92.1735164"},
    {name: "Montana",capital: "Helena",largestCity: "Billings",abbreviation: "MT",lat: "46.5883707",lng: "-112.0245054"},
    {name: "Nebraska",capital: "Lincoln",largestCity: "Omaha",abbreviation: "NE",lat: "40.8257625",lng: "-96.6851982"},
    {name: "Nevada",capital: "Carson City",largestCity: "Las Vegas",abbreviation: "NV",lat: "39.1637984",lng: "-119.7674034"},
    {name: "New Hampshire",capital: "Concord",largestCity: "Manchaster",abbreviation: "NH",lat: "43.2081366",lng: "-71.5375718"},
    {name: "New Jersey",capital: "Trenton",largestCity: "Newark",abbreviation: "NJ",lat: "40.2170534",lng: "-74.7429384"},
    {name: "New Mexico",capital: "Santa Fe",largestCity: "Albuquerque",abbreviation: "NM",lat: "35.6869752",lng: "-105.937799"},
    {name: "New York",capital: "Albany",largestCity: "New York City",abbreviation: "NY",lat: "42.6525793",lng: "-73.7562317"},
    {name: "North Carolina",capital: "Raleigh",largestCity: "Charlotte",abbreviation: "NC",lat: "35.7795897",lng: "-78.6381787"},
    {name: "North Dakota",capital: "Bismarck",largestCity: "Fargo",abbreviation: "ND",lat: "46.8083268",lng: "-100.7837392"},
    {name: "Ohio",capital: "Columbus",largestCity: "Columbus",abbreviation: "OH",lat: "39.9611755",lng: "-82.99879419999999"},
    {name: "Oklahoma",capital: "Oklahoma City",largestCity: "Oklahoma City",abbreviation: "OK",lat: "35.4675602",lng: "-97.5164276"},
    {name: "Oregon",capital: "Salem",largestCity: "Portland",abbreviation: "OR",lat: "44.9428975",lng: "-123.0350963"},
    {name: "Pennsylvania",capital: "Harrisburg",largestCity: "Philadelphia",abbreviation: "PA",lat: "40.2731911",lng: "-76.8867008"},
    {name: "Rhode Island",capital: "Providence",largestCity: "Providence",abbreviation: "RI",lat: "41.8239891",lng: "-71.4128343"},
    {name: "South Carolina",capital: "Columbia",largestCity: "Charleston",abbreviation: "SC",lat: "34.0007104",lng: "-81.0348144"},
    {name: "South Dakota",capital: "Pierre",largestCity: "Sioux Falls",abbreviation: "SD",lat: "44.3683156",lng: "-100.3509665"},
    {name: "Tennessee",capital: "Nashville",largestCity: "Nashville",abbreviation: "TN",lat: "36.1626638",lng: "-86.7816016"},
    {name: "Texas",capital: "Austin",largestCity: "Houston",abbreviation: "TX",lat: "30.267153",lng: "-97.7430608"},
    {name: "Utah",capital: "Salt Lake City",largestCity: "Salt Lake City",abbreviation: "UT",lat: "40.7607793",lng: "-111.8910474"},
    {name: "Vermont",capital: "Montpelier",largestCity: "Burlington",abbreviation: "VT",lat: "44.26005929999999",lng: "-72.5753869"},
    {name: "Virginia",capital: "Richmond",largestCity: "Virginia Beach",abbreviation: "VA",lat: "37.5407246",lng: "-77.4360481"},
    {name: "Washington",capital: "Olympia",largestCity: "Seattle",abbreviation: "WA",lat: "47.0378741",lng: "-122.9006951"},
    {name: "West Virginia",capital: "Charleston",largestCity: "Charleston",abbreviation: "WV",lat: "38.3498195",lng: "-81.6326234"},
    {name: "Wisconsin",capital: "Madison",largestCity: "Milwaukee",abbreviation: "WI",lat: "43.0730517",lng: "-89.4012302"},
    {name: "Wyoming",capital: "Cheyenne",largestCity: "Cheyenne",abbreviation: "WY",lat: "41.1399814",lng: "-104.8202462"},
    {name: "District of Columbia",capital: "Washington D.C.",largestCity: "Washington D.C.",abbreviation: "DC",lat: "38.9071923",lng: "-77.0368707"}
];


const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    questionInfo: document.getElementById('questionInfo'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    continue: document.querySelector('#continue'),
    resultMapElement: document.getElementById('resultMap'),
    numberPickerContainer: document.querySelector('.numberPicker'),
    numberPickerInput: document.getElementById('numberPickerInput'),
    map: undefined,
    gmapsResult(state) {
        const capitalString = state.capital + ', ' + state.name;
        const largestString = state.largestCity + ', ' + state.name;
        let infoString = '<div id="content" class="gmapsInfoWindow">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Additional Information</h1>' +
            '<div id="bodyContent">' +
            '<b>Capital</b>: ' + state.capital + ' <a href="http://en.wikipedia.org/wiki/' + capitalString + '" target="_blank">on Wikipedia</a><br>' +
            'Hear ' + state.capital + ' pronounced <a href="http://forvo.com/word/' + state.capital + '/#en" target="_blank">on Forvo</a><br>' +
            '<b>Largest city</b>: ' + state.largestCity + ' <a href="http://en.wikipedia.org/wiki/' + largestString + '" target="_blank">on Wikipedia</a><br>' +
            'Hear ' + state.largestCity + ' pronounced <a href="http://forvo.com/word/' + state.largestCity + '/#en" target="_blank">on Forvo</a>' +
            '</div>' +
            '</div>';

        let infoWindow = new google.maps.InfoWindow({
            content: infoString
        });
        let mapProps = {
            center: new google.maps.LatLng(state.lat, state.lng),
            zoom: 7,
        };
        this.map = new google.maps.Map(this.resultMapElement, mapProps);
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(state.lat, state.lng),
            icon: 'img/flags/markers/' + state.abbreviation + '.png'
        });
        marker.addListener('click', function() {
            infoWindow.open(this.map, marker);
        });
        marker.setMap(this.map);
        infoWindow.open(this.map, marker);
    },
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.numberPickerContainer);
        this.hide(this.resultMapElement);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
        this.resetForm();
        this.map = new google.maps.Map(this.resultMapElement, {center: new google.maps.LatLng(38.0739546, -90.2396169), zoom: 7});
    },
    resetForm() {
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
        this.show(this.numberPickerContainer);
    }
};

// End Data

const game = {
    numQuestions: 3,
    start(data) {
        view.hide(view.start);
        this.states = [...data];
        this.score = 0;
        this.questionNumbers = [];
        this.numQuestions = view.numberPickerInput.value;

        view.setup();

        while (this.questionNumbers.length < this.numQuestions) {
            let currentNumber = this.getRandomInt(1, this.states.length - 1);
            if (this.questionNumbers.indexOf(currentNumber) > -1) {
                continue;
            }
            this.questionNumbers.push(currentNumber);
        }

        this.ask();
    },
    ask() {
        if (this.questionNumbers.length > 0) {
            this.state = this.states[this.questionNumbers.pop()];
            view.render(view.questionInfo, 'Question ' + (this.numQuestions - this.questionNumbers.length) + ' of ' + this.numQuestions);
            const question = `What's the capital of ${this.state.name}?`;
            view.render(view.question, question);
        } else {
            view.render(view.questionInfo, 'Question ' + this.numQuestions + ' of ' + this.numQuestions);
            this.gameOver();
        }
    },
    check(event) {
        event.preventDefault();

        const response = view.response.answer.value;
        const answer = this.state.capital;

        if (response === answer) {
            view.render(view.result, '<p>Correct!</p>', { 'class': 'correct' });
            this.score++;
            view.render(view.score, this.score + ' out of ' + this.numQuestions);
        } else {
            view.render(view.result, '<p>Wrong! The capital of ' + this.state.name + ' is ' + this.state.capital + '</p>', { 'class': 'wrong' });
        }

        view.show(view.resultMapElement);
        view.gmapsResult(this.state);

        view.hide(view.response);
        view.show(view.result);
        view.show(view.continue);
        view.continue.focus();
    },
    continue(event) {
        event.preventDefault();
        view.show(view.response);
        view.hide(view.continue);
        view.hide(view.resultMapElement);
        view.hide(view.result);
        view.resetForm();
        this.ask();
    },
    gameOver() {
        view.render(view.info, 'Game over. You scored ' + this.score + ' point' + (this.score !== 1 ? 's' : '') + ' out of ' + this.numQuestions);
        view.teardown();
    },
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

view.start.addEventListener('click', () => game.start(states), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.continue.addEventListener('click', (event) => game.continue(event), false);
view.hide(view.response);
