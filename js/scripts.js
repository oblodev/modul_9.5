var className = document.getElementsByClassName('button');
var classNameLength = className.length;
var text = "";

console.log(className);

for (var i = 0 ; i < classNameLength ; i++ ) {
    
    text = className[i];
    alert(text.innerHTML);
}