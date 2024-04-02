const {Team} = require('../models');


const teamData = [
    {
        team_name: 'Los Angeles Lakers',
        team_city: 'Los Angeles',
        team_coach: 'Frank Vogel',
        team_division: 'Pacific'
    },
    {
        team_name: 'Golden State Warriors',
        team_city: 'San Francisco',
        team_coach: 'Steve Kerr',
        team_division: 'Pacific'
    },
    {
        team_name: 'Los Angeles Clippers',
        team_city: 'Los Angeles',
        team_coach: 'Tyronn Lue',
        team_division: 'Pacific'
    },
    {
        team_name: 'Phoenix Suns',
        team_city: 'Phoenix',
        team_coach: 'Monty Williams',
        team_division: 'Pacific'
    },
    {
        team_name: 'Sacramento Kings',
        team_city: 'Sacramento',
        team_coach: 'Luke Walton',
        team_division: 'Pacific'
    },
    {
        team_name: 'Denver Nuggets',
        team_city: 'Denver',
        team_coach: 'Michael Malone',
        team_division: 'Northwest'
    },
    {
        team_name: 'Utah Jazz',
        team_city: 'Salt Lake City',
        team_coach: 'Quin Snyder',
        team_division: 'Northwest'
    },
    {
        team_name: 'Portland Trail Blazers',
        team_city: 'Portland',
        team_coach: 'Terry Stotts',
        team_division: 'Northwest'
    },
    {
        team_name: 'Minnesota Timberwolves',
        team_city: 'Minneapolis',
        team_coach: 'Chris Finch',
        team_division: 'Northwest'
    },
    {
        team_name: 'Oklahoma City Thunder',
        team_city: 'Oklahoma City',
        team_coach: 'Mark Daigneault',
        team_division: 'Northwest'
    },
    {
        team_name: 'Dallas Mavericks',
        team_city: 'Dallas',
        team_coach: 'Rick Carlisle',
        team_division: 'Southwest'
    },
    {
        team_name: 'San Antonio Spurs',
        team_city: 'San Antonio',
        team_coach: 'Gregg Popovich',
        team_division: 'Southwest'
    },
  
];

const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;