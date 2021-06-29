
'use strict'

// let Sattle={
//     Loc:"Sattle",
//     minCust:23,
//     maxCust:65,
//     avgCookies:6.3,
//     numCookies:[],
//     numCustomers:[],
//     Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
//     Customers:function(){
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);

//         }

//     },
//     Cookies:function(){
//         // console.log(this.numCustomers);
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);

//         }


//     },
//     render:function(){
//     // console.log("render");
//         let divEL=document.getElementById("store");
//         let articleEl=document.createElement("article");
//         divEL.appendChild(articleEl);

//         let h2EL=document.createElement("h2");
//         h2EL.textContent=this.Loc;
//         articleEl.appendChild(h2EL);

//         let ulEl=document.createElement("ul");
//         // console.log(this.numCookies);
//         let Total=0;
//         for(let i=0;i<this.Hours.length;i++){
//             Total+=this.numCookies[i];
//             let liEl=document.createElement("li");
//             liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
//             ulEl.appendChild(liEl);
//         }
//         let liTotal=document.createElement("li");
//         // console.log(Total);
//         liTotal.textContent=`Total Cookies : ${Total}`;
//         ulEl.appendChild(liTotal);
//         articleEl.appendChild(ulEl);
//     },

// }
// Sattle.Customers();
// Sattle.Cookies();
// Sattle.render();


// let Tokyo={
//     Loc:"Tokyo",
//     minCust:3,
//     maxCust:24,
//     avgCookies:1.2,
//     numCookies:[],
//     numCustomers:[],
//     Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
//     Customers:function(){
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);

//         }
//     },
//     Cookies:function(){
//         // console.log(this.numCustomers);
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);

//         }

//     },
//     render:function(){
//     // console.log("render");
//         let divEL=document.getElementById("store");
//         let articleEl=document.createElement("article");
//         divEL.appendChild(articleEl);

//         let h2EL=document.createElement("h2");
//         h2EL.textContent=this.Loc;
//         articleEl.appendChild(h2EL);

//         let ulEl=document.createElement("ul");
//         // console.log(this.numCookies);
//         let Total=0;
//         for(let i=0;i<this.Hours.length;i++){
//             Total+=this.numCookies[i];
//             let liEl=document.createElement("li");
//             liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
//             ulEl.appendChild(liEl);
//         }
//         let liTotal=document.createElement("li");
//         // console.log(Total);
//         liTotal.textContent=`Total Cookies : ${Total}`;
//         ulEl.appendChild(liTotal);
//         articleEl.appendChild(ulEl);
//     },

// }
// Tokyo.Customers();
// Tokyo.Cookies();
// Tokyo.render();


// let Dubai={
//     Loc:"Dubai",
//     minCust:11,
//     maxCust:38,
//     avgCookies:3.7,
//     numCookies:[],
//     numCustomers:[],
//     Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
//     Customers:function(){
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);

//         }
//     },
//     Cookies:function(){
//         // console.log(this.numCustomers);
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);

//         }

//     },
//     render:function(){
//     // console.log("render");
//         let divEL=document.getElementById("store");
//         let articleEl=document.createElement("article");
//         divEL.appendChild(articleEl);

//         let h2EL=document.createElement("h2");
//         h2EL.textContent=this.Loc;
//         articleEl.appendChild(h2EL);

//         let ulEl=document.createElement("ul");
//         // console.log(this.numCookies);
//         let Total=0;
//         for(let i=0;i<this.Hours.length;i++){
//             Total+=this.numCookies[i];
//             let liEl=document.createElement("li");
//             liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
//             ulEl.appendChild(liEl);
//         }
//         let liTotal=document.createElement("li");
//         // console.log(Total);
//         liTotal.textContent=`Total Cookies : ${Total}`;
//         ulEl.appendChild(liTotal);
//         articleEl.appendChild(ulEl);
//     },

// }
// Dubai.Customers();
// Dubai.Cookies();
// Dubai.render();


// let Paris={
//     Loc:"Paris",
//     minCust:20,
//     maxCust:38,
//     avgCookies:2.3,
//     numCookies:[],
//     numCustomers:[],
//     Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
//     Customers:function(){
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);

//         }
//     },
//     Cookies:function(){
//         // console.log(this.numCustomers);
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);

//         }

//     },
//     render:function(){
//     // console.log("render");
//         let divEL=document.getElementById("store");
//         let articleEl=document.createElement("article");
//         divEL.appendChild(articleEl);

//         let h2EL=document.createElement("h2");
//         h2EL.textContent=this.Loc;
//         articleEl.appendChild(h2EL);

//         let ulEl=document.createElement("ul");
//         // console.log(this.numCookies);
//         let Total=0;
//         for(let i=0;i<this.Hours.length;i++){
//             Total+=this.numCookies[i];
//             let liEl=document.createElement("li");
//             liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
//             ulEl.appendChild(liEl);
//         }
//         let liTotal=document.createElement("li");
//         // console.log(Total);
//         liTotal.textContent=`Total Cookies : ${Total}`;
//         ulEl.appendChild(liTotal);
//         articleEl.appendChild(ulEl);
//     },

// }
// Paris.Customers();
// Paris.Cookies();
// Paris.render();


// let Lima={
//     Loc:"Lima",
//     minCust:2,
//     maxCust:16,
//     avgCookies:4.6,
//     numCookies:[],
//     numCustomers:[],
//     Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
//     Customers:function(){
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);

//         }
//     },
//     Cookies:function(){
//         // console.log(this.numCustomers);
//         for(let i=0;i<this.Hours.length;i++){
//             this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);

//         }

//     },
//     render:function(){
//     // console.log("render");
//         let divEL=document.getElementById("store");
//         let articleEl=document.createElement("article");
//         divEL.appendChild(articleEl);

//         let h2EL=document.createElement("h2");
//         h2EL.textContent=this.Loc;
//         articleEl.appendChild(h2EL);

//         let ulEl=document.createElement("ul");
//         // console.log(this.numCookies);
//         let Total=0;
//         for(let i=0;i<this.Hours.length;i++){
//             Total+=this.numCookies[i];
//             let liEl=document.createElement("li");
//             liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
//             ulEl.appendChild(liEl);
//         }
//         let liTotal=document.createElement("li");
//         // console.log(Total);
//         liTotal.textContent=`Total Cookies : ${Total}`;
//         ulEl.appendChild(liTotal);
//         articleEl.appendChild(ulEl);
//     },

// }
// Lima.Customers();
// Lima.Cookies();
// Lima.render();


let Total = 0;
let Hours = ["       ", " 6 am ", " 7 am  ", " 8 am ", " 9 am ", " 10 am ", " 11 am ", " 12 pm  ", " 1 pm ", " 2 pm ", " 3 pm ", " 4 pm ", " 5 pm ", " 6 pm ", " 7 pm ", " stores total "];
let stores = [];
let totalHr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function Stores(Loc, minCust, maxCust, avgCookies) {
    this.Loc = Loc;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies
    this.numCustomers = [];
    this.numCookies = [];
    stores.push(this);
}

Stores.prototype.Customers = function () {
    for (let i = 0; i < Hours.length; i++) {
        this.numCustomers[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    }
}

Stores.prototype.Cookies = function () {
    let sum = 0;
    for (let i = 0; i < Hours.length; i++) {
        this.numCookies[i] = Math.floor(this.avgCookies * this.numCustomers[i]);
        sum = this.numCookies[i]
        Total += sum;
    }
    this.numCookies.push(Total);
}



let divEL = document.getElementById("store");
let tableEl = document.createElement("table");
divEL.appendChild(tableEl);





function tHeader() {
    let headEl = document.createElement("thead");
    tableEl.appendChild(headEl);
    let rowEl = document.createElement("tr");
    headEl.appendChild(rowEl);
    let thEl = [];
    for (let i = 0; i < Hours.length; i++) {
        thEl[i] = document.createElement("th");
        thEl[i].textContent = Hours[i];
        thEl.push(Hours[i]);
        rowEl.appendChild(thEl[i]);
        
    }
}
tHeader();


function tBody(Stores) {
    let bodyEl = document.createElement("tbody");
    tableEl.appendChild(bodyEl);
    let rowEl = document.createElement("tr");
    bodyEl.appendChild(rowEl);
    let dataEl1 = document.createElement("td");
    rowEl.appendChild(dataEl1);
    dataEl1.textContent = Stores.Loc;
    let dataEl2 = [];
    let Totalrow=0;

    for (let i = 0; i < Hours.length-2; i++) {
        dataEl2[i] = document.createElement("td");
        dataEl2[i].textContent = Stores.numCookies[i];
        Totalrow+=Stores.numCookies[i];
        totalHr[i]+=Stores.numCookies[i];
        rowEl.appendChild(dataEl2[i]);
        dataEl2.push(Stores.numCookies[i]);
        rowEl.appendChild(dataEl2[i]);

    }
    let tdEl=document.createElement("td");
    tdEl.textContent=Totalrow;
    rowEl.appendChild(tdEl) ;
}
// console.log(totalHr);


function tFooter() {
    let footEl = document.createElement("tfoot");
    tableEl.appendChild(footEl);
    let rowEl = document.createElement("tr");
    footEl.appendChild(rowEl);
    let tdEl1= document.createElement("td");
        tdEl1.textContent = "Total";
        rowEl.appendChild(tdEl1);
        let sum=0;
    for (let i = 0; i < totalHr.length-1; i++) {
       let tdEl= document.createElement("td");
       sum+=totalHr[i];
        tdEl.textContent = totalHr[i];
        rowEl.appendChild(tdEl);
        
    }
    let tdEl2= document.createElement("td");
        tdEl2.textContent = sum;
        rowEl.appendChild(tdEl2);
}



let Sattle = new Stores("Sattle",23,65,6.3);
let Tokyo=new Stores("Tokyo",3,24,1.2);
let Dubai=new Stores("Dubai",11,38,3.7);
let Paris=new Stores("Paris",20,38,2.3);
let TLima=new Stores("Lima",2,16,4.6);

for(let i=0;i<stores.length;i++){
    stores[i].Customers();
    stores[i].Cookies();
    tBody(stores[i]);
    
}

tFooter();















