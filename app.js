const inputValue = document.querySelector('#todo');
const button = document.querySelector('button');
const ul = document.querySelector('.todolist');

button.addEventListener('click', () => {
    if (inputValue.value != '') {
        const li = document.createElement('li');
        li.innerHTML = `${inputValue.value} <span><i class="fas fa-trash"></i></span>`;
        ul.appendChild(li);
        inputValue.value = '';
    } else {
        console.log('hello')
    }
   
});

ul.addEventListener('dblclick', e => {
    console.log(e)
        console.log(e.target)
        e.target.classList.toggle('strikeThrough');
});

ul.addEventListener('click', e => {
    if (e.target.nodeName == 'SPAN') {
        e.target.parentElement.remove();
    } else if (e.target.nodeName == 'I') {
        e.target.parentElement.parentElement.remove();
    }
});



