setInterval(() => {
    // Get the current date and time
    d = new Date();
    // Extract hours, minutes, and seconds
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    // Calculate rotation angles for each clock hand
    hrotation = 30 * htime + mtime / 2; // Each hour is 30 degrees, and each minute contributes an additional 0.5 degrees
    mrotation = 6 * mtime; // Each minute is 6 degrees
    srotation = 6 * stime; // Each second is 6 degrees

    // Apply the rotation to the clock hands using CSS transform property
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);