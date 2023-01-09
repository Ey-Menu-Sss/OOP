let liniya = document.querySelector(".liniya");
for (let i = 1; i <= 10; i++) {
  let orta = document.createElement("div");
  orta.className = "orta";
  liniya.appendChild(orta);
}
let p = document.querySelector(".p");
let toldirish = document.querySelector(".toldirish");
liniya.style.marginTop = "-500px";
let a = -500;
let jj = false;
let aa = false;
let hisoblagich = 30;
p.textContent = hisoblagich;
let kere = false;
let tStop = document.querySelector(".textStop");
let tMove = document.querySelector(".textMove");
let toxtash = document.querySelector(".toxtash");
let ochirish = document.querySelector(".ochirish");
let zavat = document.querySelector(".zavat");
let yurish = document.querySelector(".yurish");
let tugash = document.querySelector(".tugash")
tugash.style.display = "none"
tugash.classList.add("dopalnitelniy")
class naruto {
  constructor(model, company) {
    this.model = model;
    this.company = company;
    this.zavat = false;
    this.yurish = false;
    this.toxtash = false;
    this.ochirish = true;
  }
  fzavat() {
    kere = true
    if (this.yurish) {
      tMove.textContent = "Itak zavat qilingan";
      tStop.textContent = "";
      return console.log("itak zavad qilingan");
    } else if (this.ochirish) {
      this.ochirish = false;
      this.zavat = true;
      tMove.textContent = "Zavat qilindi";
      tStop.textContent = "";
      return console.log("zavad qilindi");
    }
    else if(this.toxtash){
      tMove.textContent = "Itak zavat qilingan";
      tStop.textContent = "";
      return console.log("itak zavad qilingan");
    }
  }
  fyurish() {
    if (this.zavat) {
      this.yurish = true;
      this.toxtash = false
      tMove.textContent = "moshina yurdi";
      tStop.textContent = "";
      jj = true;
      aa = true;
      if(this.yurish && !this.toxtash){
        toldirish.addEventListener("click", () => {
          tMove.textContent = "oldin toxtang"
        })
        yurish.addEventListener("click", () => {
          tMove.textContent = "moshina itak yurvotti"
        })
      } 
    } else if (this.ochirish) {
      jj = false;
      aa = false;
      tMove.textContent = "oldin moshnani zavat qiling";
      tStop.textContent = "";
      return console.log("oldin moshinani zavad qiling");
    }
  }
  ftoxtash() {
    if (this.yurish) {
      this.yurish = false;
      this.toxtash = true;
      tStop.textContent = "Moshina toxtadi";
      tMove.textContent = "";
      jj = false;
      aa = false;
      if(this.toxtash){
        toldirish.addEventListener("click", () => {
          if(!this.yurish){
          tMove.textContent = "benzin to'ldi yurishingiz mumkun"
          hisoblagich = 30;
          p.textContent = hisoblagich
          tugash.style.display = "none"
          }
        })
      }
      return console.log("moshina toxtadi");
    } else if (!this.zavat) {
      tStop.textContent = "moshina hali zavad qilinmagan va yurmayapti yam";
      tMove.textContent = "";
      console.log("moshina hali zavad qilinmagan va yurmayapti yam");
    } else if (!this.yurish) {
      tStop.textContent = "hali yurmayapti";
      tMove.textContent = "";
      return console.log("hali yurmayapti");
    } else if (this.ochirish) {
      tStop.textContent = "moshina o'chiq turipti";
      tMove.textContent = "";
      return console.log("moshina o'chiq turipti");
    }
  }
  fochirish() {
    if (this.ochirish) {
      tStop.textContent = "itak o'chu turipti";
      tMove.textContent = "";
      return console.log("itak o'chu turipti");
    } else if (this.yurish) {
      tStop.textContent = "oldin toxtang";
      tMove.textContent = "";
      return console.log("oldin toxtang!");
    }else if(this.toxtash){
      this.ochirish = true
      this.toxtash = false
      this.zavat = false;
      tStop.textContent = "moshina ochirildi";
      tMove.textContent = "";
      console.log("moshina o'chirildi");
    }
  }
}
let car = new naruto("tesla", "tesla");
setInterval(() => {
  if (aa) {
    hisoblagich--;
    p.textContent = hisoblagich;
    if(hisoblagich === 8){
      console.log("mda");
      tugash.style.display = "block"
    }
    else if(hisoblagich === 0){
      tMove.textContent = ""
      toldirish.addEventListener("click", () => {
        tMove.textContent = "benzin to'ldi yurishingiz mumkun"
        hisoblagich = 30
        p.textContent = hisoblagich
      })
      jj = false
      aa = false
      // this.yurish = false
      car.yurish = false
      car.fochirish()
      tStop.textContent = ""
      tugash.textContent = "benzin tugadi iltimos to'ldiring!!!"
      tugash.classList.remove("dopalnitelniy")
      tugash.style.fontSize = "45px"
      tugash.style.left = "30px"
      for(let i = 1; i <= 4; i++){
        let btn = document.querySelector(`.b${i}`)
        btn.style.visibility = "hidden"
        toldirish.addEventListener("click", () => {
          btn.style.visibility = "visible"
          tugash.style.display = "none"
        })
      }
    }
  }
}, 1000);
// oradi yer yurishi
setInterval(() => {
  if (jj) {
    a += 5;
    liniya.style.marginTop = `${a}px`;
    if (a >= 0) {
      a = -500;
    }
  }
}, 10);
// knopkala bosilishi
zavat.addEventListener("click", () => {
  car.fzavat();
});
yurish.addEventListener("click", () => {
  car.fyurish();
});
toxtash.addEventListener("click", () => {
  car.ftoxtash();
});
ochirish.addEventListener("click", () => {
  car.fochirish();
});
