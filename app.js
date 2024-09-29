const scrollReavelOption={
    distance:"50px",
    origin:"bottom",
    duration:"1000"
};
scrollReavel().reveal(".container .letter-s",{
    duration:1000,
    delay:2000,
});
scrollReavel().reveal(".container img",{
    duration:1000,
    delay:2500,
});
scrollReavel().reveal(".container .text_left",{
    ...scrollReavelOption,
    origin:"left",
    delay:3000,
});
scrollReavel().reveal(".container .text_right",{
    ...scrollReavelOption,
    origin:"right",
    delay:3000,
});
scrollReavel().reveal(".container .explore",{
    duration:1000,
    delay:3500,
});
scrollReavel().reveal(".container .catalog",{
    duration:1000,
    delay:5000,
});
scrollReavel().reveal(".container .print",{
    duration:1000,
    delay:5500,
});
scrollReavel().reveal(".container h5",{
    duration:1000,
    interval:500,
    delay:3000,
});


