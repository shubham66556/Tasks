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
var headerTitle =document.getElementById('header-title')
// console.log(headertitle);
var header = document.getElementById('main-header');
headerTitle.style.borderBottom = 'solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontweight = 'bold';
items.style.backgroundColor = 'yellow';
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='helloworld'; 