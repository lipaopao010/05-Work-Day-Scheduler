# 05-Work-Day-Scheduler
This project is a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The date displayed in this project is by using Moment.js library.

The link is :
https://lipaopao010.github.io/05-Work-Day-Scheduler/

How this project works:

WHEN the opening the planner,
THEN the current day is displayed at the top of the calendar.
WHEN the page is scroll down,
THEN the user is presented with timeblocks for standard business hours(9AM to 5PM).
WHEN viewing the timeblocks for that day,
THEN each timeblock is color coded to indicate whether it is in the past(gray), present(green), or future(pink).
WHEN clicking into a timeblock,
THEN the user can enter an event.
WHEN clicking the save button for that timeblock,
THEN the text for that event is saved in local storage.
WHEN the user refresh the page,
THEN the saved events persist.
