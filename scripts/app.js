// change background image every x amount of seconds 
// use setinterval

(
    function () {
        let counter = 1


        setInterval(function () {
            let background = document.getElementsByClassName("image")[0].style.backgroundImage
            var hero = "hero-image-" + counter
            document.getElementsByClassName("image")[0].style.backgroundImage = `url(./images/${hero}.jpg)`

            counter++
            if (counter === 4) {
                counter = 0
            }
        }, 2000)
    }
)()