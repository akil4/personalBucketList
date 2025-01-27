let newitem = document.getElementById('new-item');
let bucketlist = document.getElementById('bucket-list');
let inputlist = JSON.parse(localStorage.getItem('inputlist')) || [];

newitem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let value = newitem.value;
        if (value) {
            inputlist.push(value);
            localStorage.setItem('inputlist', JSON.stringify(inputlist));
            newitem.value = '';
            displayList();
        }
    }
});

function displayList() {
    bucketlist.innerHTML = '';
    let ol = document.createElement('ol');
    inputlist.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });
    bucketlist.appendChild(ol);
}