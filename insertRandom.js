import { sequelize, UserActivity } from './db.js';


const names = ['Charlie', 'Dana', 'Eva', 'Frank']; 
const activities = ['Comment', 'Like', 'Share', 'Logout']

let indexNames = Math.floor(Math.random() * names.length);

let indexActivities = Math.floor(Math.random() * activities.length);