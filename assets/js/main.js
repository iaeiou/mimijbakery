import anime from 'animejs/lib/anime.es'
// import * as params from '@params'

console.log("Javascript loaded");

var weatherMsg = document.createElement('div')
weatherMsg.id = 'weather-msg'
weatherMsg.innerText = 'Added from Javascript'

var weatherContainer = document.querySelector('#weather-cont')
weatherContainer.appendChild(weatherMsg)
var weatherButton = document.querySelector('#weather-btn')

console.log(weatherButton);

weatherButton.addEventListener('click', function(){
    console.log(weatherButton.dataset.open);
    if (weatherButton.dataset.open == 'false') {
        
        weatherMsg.style.display = 'block'
    
        msgAnimation.play()

        weatherButton.dataset.open = 'true'
    } else {
        weatherMsg.style.display = 'none'
        msgAnimation.reverse()
        weatherButton.dataset.open = 'false'
    }


})

var msgAnimation = anime({
    targets: '#weather-msg',
    autoplay: false,
    translateY: [
        { value: 100, duration: 200 },
    ],
    opacity: [
        { value: 0, duration: 100 },
        { value: 1, duration: 300 }
    ]
})

anime({
    targets: '.rec-card',
    translateX: [
        { value:70, duration: 100 },
        { value:0, duration: 900 },
    ],
    opacity: [
        { value: 0, duration: 200},
        { value: 1, duration: 500},
    ],
    easing: 'easeOutQuad',
    delay: function(el, i, l) { return i * 200 },
  });

// Stars
  // anime({
//     targets: '.star-rate',
//     translateX: [
//         { value:-70, duration: 100 },
//         { value:0, duration: 900 },
//     ],
//     opacity: [
//         { value: 0, duration: 200},
//         { value: 1, duration: 500},
//     ],
//     easing: 'easeOutQuad',
//     delay: function(el, i, l) { return i * 200 },
// })