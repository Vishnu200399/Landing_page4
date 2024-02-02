var tl = gsap.timeline()

tl.from("#nav",{
    opacity:0,
    delay:0.3,
})
tl.from("#nav-part1,#nav-part2,#nav-part3,h5,btm-left,i,h4",{
    y:-80,
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.3
})
tl.from("text",{
    x:-500,
    duration:0.2,
    stagger:0.4, 
    opacity:0,
})
tl.from("#img1,#img2,#img3,#img4",{
    scale:0.5,
    opacity:0,
    duration:0.5
})