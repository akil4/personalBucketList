let newitem = document.getElementById('new-item');
let bucketlist = document.getElementById('bucket-list');
let inputlist = [];

newitem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let value = newitem.value;
        if (value) {
            inputlist.push(value);
            newitem.value = '';
            displayList();
        }
    }
});

function displayList() {
    bucketlist.innerHTML = '';
    let ul = document.create
}