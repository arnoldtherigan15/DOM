// var icons = document.querySelectorAll('.monsters');
// for (var i = 0; i < icons.length; i++) {
//     icons[i].addEventListener('click',function(){
//     var buttonInner = this.innerHTML;
//     console.log(buttonInner);
//     // makeSound(buttonInner);
//     // buttonAnimation(buttonInner);
//     })
// }
// function makeSound (key) {
//     if (key === 'nargacuga') {
//         alert('hi!');
//         // var doo = new Audio ('assets/do.mp3');
//         // doo.playbackRate = 2;
//         // doo.play();
//     }
// }
// icons.addEventListener('click',function(){
//     var tes = this.innerHTML;
//     console.log(tes);
    
// })
// document.querySelectorAll('button')[1].addEventListener('click',function(){
//     alert('hai');
// })
var coba = document.querySelectorAll('.monster');
for (var i = 0; i < coba.length; i++) {
    coba[i].addEventListener('click',function(){
        var buttonInner = this.innerHTML;
        console.log(buttonInner);
        
            makeSound(buttonInner);
        })
}
function makeSound(key) {
    // console.log(key);
    
    if (key === 'a') {
        alert('hai berhasil');
    }
}