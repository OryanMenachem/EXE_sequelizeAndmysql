import { UserActivity } from './db.js';



const names = ['Charlie', 'Dana', 'Eva', 'Frank']; 
const activities = ['Comment', 'Like', 'Share', 'Logout']

const getIndex = (list) => Math.floor(Math.random() * list.length);



setInterval(async ()  => {
    await UserActivity.create({
        name: names[getIndex(names)], 
        activity: activities[getIndex(activities)]})
    }, 10000)

setInterval(async () => {
    const allUsers = await UserActivity.findAll();
    console.table(allUsers.map((user) => user.toJSON()))

}, 30000)


