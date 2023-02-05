

let count = 0;
let price = 100;
let total=0;
document.querySelector("#increment").addEventListener("click", () => {
  count++;
  document.querySelector("#count").innerHTML = count;
  total+=count*price;
  document.querySelector("#total-price").innerHTML = total;
});

document.querySelector("#decrement").addEventListener("click", () => {
  if (count == 0) {
    alert("mehsul menfi ola bilmez");
  } else {
    total-=count*price;
    count--;
    document.querySelector("#count").innerHTML = count;
    document.querySelector("#total-price").innerHTML = total;
  
  }
});

