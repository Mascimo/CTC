$('.procurarContent').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});


// REDUZIR

$('.carousel, .carousel03').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
            }
        },
    ]
});



// $('.carousel03').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1100,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 centerMode: true,
//                 variableWidth: true,
//             }
//         },
//     ]
// });








$('.commentsConteiner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });





  $('.comparisonCarousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});


















const menuMobile = document.getElementById("btn-mobile");

menuMobile.addEventListener('click', activeMenu);
menuMobile.addEventListener('touchstart', activeMenu);


function activeMenu(event) {

    if (event.type === "touchstart") event.preventDefault();

    const menu = document.getElementById("menu");
    menu.classList.toggle("active");

    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("active");


    const active = hamburger.classList.contains('active');
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu")
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu")
    }
}
