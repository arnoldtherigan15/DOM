document.querySelector('button').style.color = 'red';
var liArr = document.querySelectorAll('li');
// document.querySelectorAll('li a')[0].style.color = 'green';
for (var i = 0; i < liArr.length; i++) {
    liArr[i].style.color = 'green';
}