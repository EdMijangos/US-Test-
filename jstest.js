const arr = [1, 3, 5, [21, 54, [1, 6, 100]], [1, 200]]

let counter = 0;
function hola(a){
  for(var i = 0; i < a.length; i++){
    if(Array.isArray(a[i])){
      hola(a[i]);
    }
    else counter += a[i];
  }
  return counter;
}

hola(arr);
console.log(counter)