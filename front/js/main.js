
(function(){
    let screenWidth = window.innerWidth
    if (screenWidth >= 1280){
        let scene = document.getElementById('scene')
        let parallaxInstance = new Parallax(scene)
    }
}());
//
// window.addEventListener('orientationchange', () => {
//     window.location.reload()
//     // const orientation = window.matchMedia('(orientation: landscape)')
//     //
//     // if (orientation.matches) {
//     //     window.location.reload()
//     // }
// })









