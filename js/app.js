
var firstanimation = new TimelineMax()

firstanimation
    .set(".headingbg", { scale: 1.3, transformOrigin: "cnter top" })
    .to(".headingbg", 3, { scale: 1, y: "0%" })
    .to(".headingbg", 3, { scale: 0.3, y: "0%" })
var controllar = new ScrollMagic.Controller()


var scene1 = new ScrollMagic.Scene({
    triggerElement: ".tirger",
    duration: "100%"
})

    .setTween(firstanimation)
    // .setPin(".headingbg")
    // .addIndicators()
    .addTo(controllar);





var secondanimation = new TimelineMax()

if(window.innerWidth < 850){
    
    secondanimation

    .set(".topanimation",  { x: "50%" })
    .to(".topanimation",5, { x: "40%" })
    .to(".topanimation",5, { x: "30%" })
    .to(".topanimation",5, { x: "20%" })
    .to(".topanimation",5, { x: "15%" })
    .to(".topanimation", 7, { x: "10%" })
    .to(".topanimation", 7, { x: "0%" })
    .to(".topanimation", 7, { x: "-20%" })
    .to(".topanimation", 7, { x: "-25%" })
    .to(".topanimation", 7, { x: "-30%" })
    .to(".topanimation", 7, { x: "-35%" })
    .to(".topanimation", 7, { x: "-40%" })
}
else{
    secondanimation

    .set(".topanimation",  { x: "50%" })
    .to(".topanimation",5, { x: "40%" })
    .to(".topanimation",5, { x: "30%" })
    .to(".topanimation",5, { x: "20%" })
    .to(".topanimation",5, { x: "15%" })
    .to(".topanimation", 7, { x: "10%" })
    .to(".topanimation", 7, { x: "0%" })
    .to(".topanimation", 7, { x: "-20%" })
    .to(".topanimation", 7, { x: "-25%" })
    .to(".topanimation", 7, { x: "-30%" })
    .to(".topanimation", 7, { x: "-35%" })
    .to(".topanimation", 7, { x: "-40%" })
    .to(".topanimation", 7, { x: "-45%" })
    .to(".topanimation", 7, { x: "-50%" })
    .to(".topanimation", 7, { x: "-55%" })
    .to(".topanimation", 7, { x: "-60%" })
    .to(".topanimation", 7, { x: "-65%" })
    .to(".topanimation", 7, { x: "-70%" })
}


    
var controllar2 = new ScrollMagic.Controller()


var scene2 = new ScrollMagic.Scene({
    triggerElement: ".scndanimtiontriger",
    duration: "100%"
})

    .setTween(secondanimation)

    // .addIndicators()
    .addTo(controllar2);







var thirdanimation = new TimelineMax()
thirdanimation
    .set(".thirdanimation", { scale: 0.4, y: "20" })
    .to(".thirdanimation", 1, { scale: 1.2, y: "20" })
var controllar3 = new ScrollMagic.Controller()


var scene3 = new ScrollMagic.Scene({
    triggerElement: ".thirdanimation",
    duration: "100%"
})

    .setTween(thirdanimation)

    // .addIndicators()
    .addTo(controllar3);








var fouranimation = new TimelineMax()
fouranimation
    .set(".fouranimation ", { scale: 0.4, y: "20" })
    .to(".fouranimation ", 1, { scale: 1.2, y: "20" })
var controllar4 = new ScrollMagic.Controller()


var scene4 = new ScrollMagic.Scene({
    triggerElement: ".fouranimation",
    duration: "100%"
})

    .setTween(fouranimation)

    // .addIndicators()
    .addTo(controllar4);





var fifthanimation = new TimelineMax()
fifthanimation
    .set(".fifthanimation ", { scale: 0.4, y: "20" })
    .to(".fifthanimation ", 1, { scale: 1.2, y: "20" })
var controllar5 = new ScrollMagic.Controller()


var scene5 = new ScrollMagic.Scene({
    triggerElement: ".fifthanimation",
    duration: "100%"
})

    .setTween(fifthanimation)

    // .addIndicators()
    .addTo(controllar5);



