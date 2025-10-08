// gsap.to("#box1",{
//     x:1000,
//     duration :2,
//     delay:1
// })

// gsap.to("#box2",{
//     x:500,
//     y:500,
//     duration :2,
//     delay:1
// })


// gsap.to("#box1",{
//     x:1200,
//     duration :2,
//     delay:1
// })

// gsap.from("#box2",{
//     x:1200,
//     duration :2,
//     delay:1
// })

// gsap.to("#box1",{
//     x:1200,
//     duration :2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "blue",
//     borderRadius : "50%",
// }

// gsap.from("h1",{
//     opacity:0,
//     color:"red",
//     duration :2,
//     delay :1,
//     y:20,
//     stagger:1
// })

// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
// })

// gsap.to("#box2",{
//     x:1200,
//     duration:2,
//     delay:3,
//     backgroundColor:"yellow",
// })

// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:2,
//     delay:4
// })

// var tl = gsap.timeline();

// tl.to("#box1",{
//     x:1200,
//     rotate :360,
//     duration:2,
//     delay:1
// })

// tl.to("#box2",{
//     x:1200,
//     rotate :360,
//     duration:2,
// })

// tl.to("#box3",{
//     x:1200,
//     rotate :360,
//     duration:2,
// })

gsap.from("#page1 #box1",{
    scale : 0,
    delay : 1,
    duration : 2,
    rotate : 360
})

gsap.from("#page2 #box2",{
    scale : 0,
    delay : 1,
    duration : 2,
    rotate : 360,
    scrollTrigger : "#page2 #box2"
})

gsap.from("#page3 #box3",{
    scale : 0,
    delay : 1,
    duration : 2,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page3 #box3",
        scroller : "body",
        markers : true,
        startPoint : "top 60%"
    }
})