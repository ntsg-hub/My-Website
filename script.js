function animateTitle(Title = "Hello, World!", delay = 300) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 1) ? " " : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}
/* I didn't do it. Thanks to Thomas Weichhart for the help! 🐱  https://stackoverflow.com/a/68499694 */
