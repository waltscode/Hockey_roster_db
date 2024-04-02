const {Team} = require('../models');


const teamData = [
    {
        "team_name": "Anaheim Ducks",
        "team_city": "Anaheim",
        "team_coach": "Dallas Eakins",
        "team_division": "Pacific"
    },
    {
        "team_name": "Arizona Coyotes",
        "team_city": "Arizona",
        "team_coach": "Andre Tourigny",
        "team_division": "Pacific"
    },
    {
        "team_name": "Boston Bruins",
        "team_city": "Boston",
        "team_coach": "Bruce Cassidy",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Buffalo Sabres",
        "team_city": "Buffalo",
        "team_coach": "Don Granato",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Calgary Flames",
        "team_city": "Calgary",
        "team_coach": "Darryl Sutter",
        "team_division": "Pacific"
    },
    {
        "team_name": "Carolina Hurricanes",
        "team_city": "Carolina",
        "team_coach": "Rod Brind'Amour",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "Chicago Blackhawks",
        "team_city": "Chicago",
        "team_coach": "Derek King",
        "team_division": "Central"
    },
    {
        "team_name": "Colorado Avalanche",
        "team_city": "Colorado",
        "team_coach": "Jared Bednar",
        "team_division": "Central"
    },
    {
        "team_name": "Columbus Blue Jackets",
        "team_city": "Columbus",
        "team_coach": "Brad Larsen",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "Dallas Stars",
        "team_city": "Dallas",
        "team_coach": "Rick Bowness",
        "team_division": "Central"
    },
    {
        "team_name": "Detroit Red Wings",
        "team_city": "Detroit",
        "team_coach": "Jeff Blashill",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Edmonton Oilers",
        "team_city": "Edmonton",
        "team_coach": "Jay Woodcroft",
        "team_division": "Pacific"
    },
    {
        "team_name": "Florida Panthers",
        "team_city": "Sunrise",
        "team_coach": "Joel Quenneville",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Los Angeles Kings",
        "team_city": "Los Angeles",
        "team_coach": "Todd McLellan",
        "team_division": "Pacific"
    },
    {
        "team_name": "Minnesota Wild",
        "team_city": "Minnesota",
        "team_coach": "Dean Evason",
        "team_division": "Central"
    },
    {
        "team_name": "Montreal Canadiens",
        "team_city": "Montreal",
        "team_coach": "Dominique Ducharme",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Nashville Predators",
        "team_city": "Nashville",
        "team_coach": "John Hynes",
        "team_division": "Central"
    },
    {
        "team_name": "New Jersey Devils",
        "team_city": "New Jersey",
        "team_coach": "Lindy Ruff",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "New York Islanders",
        "team_city": "New York",
        "team_coach": "Barry Trotz",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "New York Rangers",
        "team_city": "New York",
        "team_coach": "Gerard Gallant",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "Ottawa Senators",
        "team_city": "Ottawa",
        "team_coach": "D.J. Smith",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Philadelphia Flyers",
        "team_city": "Philadelphia",
        "team_coach": "Mike Yeo",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "Pittsburgh Penguins",
        "team_city": "Pittsburgh",
        "team_coach": "Mike Sullivan",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "San Jose Sharks",
        "team_city": "San Jose",
        "team_coach": "Bob Boughner",
        "team_division": "Pacific"
    },
    {
        "team_name": "Seattle Kraken",
        "team_city": "Seattle",
        "team_coach": "Dave Hakstol",
        "team_division": "Pacific"
    },
    {
        "team_name": "St. Louis Blues",
        "team_city": "St. Louis",
        "team_coach": "Craig Berube",
        "team_division": "Central"
    },
    {
        "team_name": "Tampa Bay Lightning",
        "team_city": "Tampa Bay",
        "team_coach": "Jon Cooper",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Toronto Maple Leafs",
        "team_city": "Toronto",
        "team_coach": "Sheldon Keefe",
        "team_division": "Atlantic"
    },
    {
        "team_name": "Vancouver Canucks",
        "team_city": "Vancouver",
        "team_coach": "Bruce Boudreau",
        "team_division": "Pacific"
    },
    {
        "team_name": "Vegas Golden Knights",
        "team_city": "Las Vegas",
        "team_coach": "Pete DeBoer",
        "team_division": "Pacific"
    },
    {
        "team_name": "Washington Capitals",
        "team_city": "Washington",
        "team_coach": "Peter Laviolette",
        "team_division": "Metropolitan"
    },
    {
        "team_name": "Winnipeg Jets",
        "team_city": "Winnipeg",
        "team_coach": "Paul Maurice",
        "team_division": "Central"
    }
  
];

const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;