/**
 * @param {int} hours 
 * @param {int} minutes 
 * @param {int} seconds 
 * @returns The current time formatted as 'HH:MM:SS AM/PM'
 */
const formatTime = (hours, minutes, seconds) => {
    let newHour = hours;

    if (hours > 12) newHour = hours - 12;               // If time is from 1pm (13) to 11pm (23)
    else if (hours === 0 || hours === 24) newHour = 12; // If time is midnight (0 or 24)

    const textHours   = newHour < 10 ? `0${newHour}` : `${newHour}`; // If any of these 3 are less than
    const textMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`; // 10, then add a 0 in in front
    const textSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const ending      = hours > 12 ? 'PM' : 'AM';

    return `${textHours}:${textMinutes}:${textSeconds} ${ending}`;

};

// Interval that runs and updates the element with id of 'clock' every second (1000ms)
setInterval(() => {
    const clock = document.getElementById('clock');            // Get the element with id of 'clock'
    const dateAndTime   = new Date();                          // Create a new Date obj
    const hours         = dateAndTime.getHours();              // Get hours from 'dateAndTime'
    const minutes       = dateAndTime.getMinutes();            // Get minutes from 'dateAndTime'
    const seconds       = dateAndTime.getSeconds();            // Get seconds from 'dateAndTime'
    const formattedTime = formatTime(hours, minutes, seconds); // Format time into how it should be presented

    clock.textContent = formattedTime; // Update the text of 'clock'
}, 1000);