document.querySelector('button').style.color = 'red';
var liArr = document.querySelectorAll('li');
// document.querySelectorAll('li a')[0].style.color = 'green';
for (var i = 0; i < liArr.length; i++) {
    liArr[i].style.color = 'green';
}
document.querySelector('h1').classList.toggle('h1Fontsize');
document.querySelector('button').textContent = 'Pencet Aku';