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
setInterval(() => {
  if (aa) {
    hisoblagich--;
    p.textContent = hisoblagich;
    if (hisoblagich <= 0) {
      aa = false;
      jj = false;
    }
  }
}, 2000);
setInterval(() => {
  if (jj) {
    a += 5;
    liniya.style.marginTop = `${a}px`;
    if (a >= 0) {
      a = -500;
    }
  }
}, 10);

let tStop = document.querySelector(".textStop");
let tMove = document.querySelector(".textMove");
let toxtash = document.querySelector(".toxtash");
let ochirish = document.querySelector(".ochirish");
let zavat = document.querySelector(".zavat");
let yurish = document.querySelector(".yurish");

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
  }
  fyurish() {
    if (this.zavat) {
      this.yurish = true;
      tMove.textContent = "moshina yurdi";
      tStop.textContent = "";
      jj = true;
      aa = true;
      setInterval(() => {
        if (hisoblagich == 0) {
          tMove.textContent = "moshinani benzini tugadi iltimos to'ldiring";
        }
        toldirish.addEventListener("click", () => {
          tMove.textContent = "moshina yurdi";
          jj = true;
          aa = true;
        });
      }, 100);
      return console.log("moshina yurdi");
    } else if (this.ochirish) {
      jj = false;
      aa = false;
      tMove.textContent = "ondin moshnani zavat qiling";
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
    }

    this.ochirish = true;
    this.zavat = false;
    tStop.textContent = "moshina ochirildi";
    tMove.textContent = "";
    console.log("moshina o'chirildi");
  }
}

let car = new naruto("tesla", "tesla");

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
toldirish.addEventListener("click", () => {
  aa = true;
  hisoblagich = 30;
});
