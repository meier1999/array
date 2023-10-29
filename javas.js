let array = [];
for (let i = 0; i < Infinity; i++) {
  let b = prompt("Add, bilan matn yoki son kiriting va dell, bilan o'chiring");
  let c = b.split(",");
  if (c[0] == "add") {
    array.push(c[1]);
  }
  else if (c[0] == "stop") {
    break
  }
for (let j = 0; j < array.length; j++) {
  if (c[0] == "del") {
          if (array[j] == c[1]) {
            array.splice(j, 1);
          }
      }
}
}
alert(array)
console.log(array);


    
let o = prompt("Biror matn kiriting !!","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, optio?")
let p = o.split("")
for (let u = 0; u < p.length; u++) {
     if (p[u]=='a' || p[u]=='u' || p[u]=='i' || p[u]=='o' || p[u]=='e'|| p[u]==''|| p[u]=='.'|| p[u]==','||p[u]=='!' ) {
          p.splice[u,1]
     }
}
alert(p)
console.log(p);