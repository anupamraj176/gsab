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

var tl = gsap.timeline();

tl.to("#box1",{
    x:1200,
    rotate :360,
    duration:2,
    delay:1
})

tl.to("#box2",{
    x:1200,
    rotate :360,
    duration:2,
})

tl.to("#box3",{
    x:1200,
    rotate :360,
    duration:2,
})