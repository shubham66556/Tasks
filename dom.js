// //console.dir(document)
// // console.log(document.domain);
// // console.log(document.url);
// // console.log(document.title);
// // console.log(document.doctype);
// // console.log(document.head);
// // // document.title = 123;
// // console.log(document.body);

// // console.log(document.all);
// // console.log(document.all[10]);
// // console.log(document.links);
// // console.log(forms[0]);
// // console.log(document.images);
// // console.log(document.getElementById('header-title'));
// var headerTitle =document.getElementById('header-title')
// // console.log(headertitle);
// var header = document.getElementById('main-header');
// headerTitle.style.borderBottom = 'solid 3px #000';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontweight = 'bold';
// items.style.backgroundColor = 'yellow';
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='helloworld';

// var items = document.getElementsByClassName('list-group-item');
// console.log('items');
// console.log(items[1]);
// items[2].textContent = 'Hello2';
// items[2].style.backgroundColor = 'green';

// for(var i = 0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// var li = document.getElementsByTagName('li');
// console.log('li');
// console.log(li[1]);
// li[2].textContent = 'Hello2';
// li[2].style.backgroundColor = 'green';

// for(var i = 0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

var item = document.querySelector('.list-group-item');
var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector
('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

var even = document.querySelectorAll('li:nth-child(even');

for(var i  =0;i<=2;i++){

    even[i].style.color = 'green';
}
