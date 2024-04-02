const {Player} = require('../models');

const playerData = [
    //Toronto Maple Leafs
    {
        "player_name": "Auston Matthews",
        "player_number": 34,
        "player_position": "C",
        "player_age": 24,
        "player_height": "6-3",
        "player_weight": 223,
        "player_college": "N/A (Drafted from ZSC Lions)",
        "player_team": 28,
        "player_salary": 11666667
    },
    {
        "player_name": "Mitch Marner",
        "player_number": 16,
        "player_position": "RW",
        "player_age": 24,
        "player_height": "6-0",
        "player_weight": 175,
        "player_college": "N/A (Drafted from London Knights)",
        "player_team": 28,
        "player_salary": 10600000
    },
    {
        "player_name": "John Tavares",
        "player_number": 91,
        "player_position": "C",
        "player_age": 31,
        "player_height": "6-1",
        "player_weight": 205,
        "player_college": "London Knights",
        "player_team": 28,
        "player_salary": 11000000
    },
    {
        "player_name": "William Nylander",
        "player_number": 88,
        "player_position": "RW",
        "player_age": 25,
        "player_height": "6-0",
        "player_weight": 196,
        "player_college": "Rögle BK (SHL)",
        "player_team": 28,
        "player_salary": 7000000
    },
    {
        "player_name": "Morgan Rielly",
        "player_number": 44,
        "player_position": "D",
        "player_age": 27,
        "player_height": "6-1",
        "player_weight": 217,
        "player_college": "Moose Jaw Warriors",
        "player_team": 28,
        "player_salary": 5000000
    },
    {
        "player_name": "Jake Muzzin",
        "player_number": 8,
        "player_position": "D",
        "player_age": 33,
        "player_height": "6-3",
        "player_weight": 213,
        "player_college": "Sault Ste. Marie Greyhounds",
        "player_team": 28,
        "player_salary": 5250000
    },
    {
        "player_name": "Jack Campbell",
        "player_number": 36,
        "player_position": "G",
        "player_age": 30,
        "player_height": "6-2",
        "player_weight": 197,
        "player_college": "Port Huron Fighting Falcons",
        "player_team": 28,
        "player_salary": 1675000
    },
    {
        "player_name": "Michael Bunting",
        "player_number": 58,
        "player_position": "LW",
        "player_age": 26,
        "player_height": "5-11",
        "player_weight": 203,
        "player_college": "Soo Greyhounds",
        "player_team": 28,
        "player_salary": 950000
    },
    {
        "player_name": "Wayne Simmonds",
        "player_number": 24,
        "player_position": "RW",
        "player_age": 33,
        "player_height": "6-2",
        "player_weight": 185,
        "player_college": "Soo Greyhounds",
        "player_team": 28,
        "player_salary": 900000
    },
    {
        "player_name": "T.J. Brodie",
        "player_number": 78,
        "player_position": "D",
        "player_age": 31,
        "player_height": "6-1",
        "player_weight": 182,
        "player_college": "Saginaw Spirit",
        "player_team": 28,
        "player_salary": 5000000
    },
    {
        "player_name": "David Kampf",
        "player_number": 64,
        "player_position": "C",
        "player_age": 27,
        "player_height": "6-2",
        "player_weight": 194,
        "player_college": "Pirati Chomutov (Czech)",
        "player_team": 28,
        "player_salary": 1500000
    },
    {
        "player_name": "Pierre Engvall",
        "player_number": 47,
        "player_position": "LW",
        "player_age": 25,
        "player_height": "6-5",
        "player_weight": 214,
        "player_college": "Frolunda HC (SHL)",
        "player_team": 28,
        "player_salary": 1750000
    },
    {
        "player_name": "Ilya Mikheyev",
        "player_number": 65,
        "player_position": "LW",
        "player_age": 26,
        "player_height": "6-3",
        "player_weight": 194,
        "player_college": "Avangard Omsk (KHL)",
        "player_team": 28,
        "player_salary": 1500000
    },
    {
        "player_name": "Travis Dermott",
        "player_number": 23,
        "player_position": "D",
        "player_age": 25,
        "player_height": "6-0",
        "player_weight": 208,
        "player_college": "Erie Otters",
        "player_team": 28,
        "player_salary": 1500000
    },
    {
        "player_name": "Justin Holl",
        "player_number": 3,
        "player_position": "D",
        "player_age": 29,
        "player_height": "6-4",
        "player_weight": 210,
        "player_college": "Minnesota Golden Gophers",
        "player_team": 28,
        "player_salary": 2000000
    },
    {
        "player_name": "Jason Spezza",
        "player_number": 19,
        "player_position": "C",
        "player_age": 38,
        "player_height": "6-3",
        "player_weight": 214,
        "player_college": "N/A (Drafted from Brampton Battalion)",
        "player_team": 28,
        "player_salary": 750000
    },
    {
        "player_name": "Timothy Liljegren",
        "player_number": 37,
        "player_position": "D",
        "player_age": 22,
        "player_height": "6-0",
        "player_weight": 192,
        "player_college": "Toronto Marlies",
        "player_team": 28,
        "player_salary": 863333
    },
    {
        "player_name": "Rasmus Sandin",
        "player_number": 38,
        "player_position": "D",
        "player_age": 21,
        "player_height": "5-11",
        "player_weight": 183,
        "player_college": "Toronto Marlies",
        "player_team": 28,
        "player_salary": 894166
    },
    {
        "player_name": "Joseph Woll",
        "player_number": 60,
        "player_position": "G",
        "player_age": 23,
        "player_height": "6-4",
        "player_weight": 203,
        "player_college": "Boston College",
        "player_team": 28,
        "player_salary": 850000
    },
    {
        "player_name": "Ondrej Kase",
        "player_number": 25,
        "player_position": "RW",
        "player_age": 26,
        "player_height": "6-0",
        "player_weight": 186,
        "player_college": "Pardubice HC (Czech)",
        "player_team": 28,
        "player_salary": 2000000
    },
    {
        "player_name": "Nick Ritchie",
        "player_number": 10,
        "player_position": "LW",
        "player_age": 26,
        "player_height": "6-2",
        "player_weight": 232,
        "player_college": "Peterborough Petes",
        "player_team": 28,
        "player_salary": 2250000
    }
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;

