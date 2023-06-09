console.log(document.body);

//for(let index = 0;index < document.body.childNodes.length; index++) {
  //  console.log(document.body.childNodes[index]);
//}

//childNodes will give you all nodes including elements, textnode, 
console.log(document.body.childNodes[0]);;
console.log(document.body.firstChild);;
console.log(document.body.childNodes[document.body.childNodes.length - 1]);
console.log(document.body.lastChild);


//childNodes is not an array, it's  a collection/iterable .you cannot use array function like filter
for(const node of document.body.childNodes){
    console.log(node);
}