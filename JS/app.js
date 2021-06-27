
'use strict'

let Sattle={
    Loc:"Sattle",
    minCust:23,
    maxCust:65,
    avgCookies:6.3,
    numCookies:[],
    numCustomers:[],
    Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
    Customers:function(){
        for(let i=0;i<this.Hours.length;i++){
            this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
        }
    },
    Cookies:function(){
        // console.log(this.numCustomers);
        for(let i=0;i<this.Hours.length;i++){
            this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);
        }

    },
    render:function(){
    // console.log("render");
        let divEL=document.getElementById("store");
        let articleEl=document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL=document.createElement("h2");
        h2EL.textContent=this.Loc;
        articleEl.appendChild(h2EL);

        let ulEl=document.createElement("ul");
        // console.log(this.numCookies);
        let Total=0;
        for(let i=0;i<this.Hours.length;i++){
            Total+=this.numCookies[i];
            let liEl=document.createElement("li");
            liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal=document.createElement("li");
        // console.log(Total);
        liTotal.textContent=`Total Cookies : ${Total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);
    },
    
}
Sattle.Customers();
Sattle.Cookies();
Sattle.render();


let Tokyo={
    Loc:"Tokyo",
    minCust:3,
    maxCust:24,
    avgCookies:1.2,
    numCookies:[],
    numCustomers:[],
    Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
    Customers:function(){
        for(let i=0;i<this.Hours.length;i++){
            this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
        }
    },
    Cookies:function(){
        // console.log(this.numCustomers);
        for(let i=0;i<this.Hours.length;i++){
            this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);
        }

    },
    render:function(){
    // console.log("render");
        let divEL=document.getElementById("store");
        let articleEl=document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL=document.createElement("h2");
        h2EL.textContent=this.Loc;
        articleEl.appendChild(h2EL);

        let ulEl=document.createElement("ul");
        // console.log(this.numCookies);
        let Total=0;
        for(let i=0;i<this.Hours.length;i++){
            Total+=this.numCookies[i];
            let liEl=document.createElement("li");
            liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal=document.createElement("li");
        // console.log(Total);
        liTotal.textContent=`Total Cookies : ${Total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);
    },
    
}
Tokyo.Customers();
Tokyo.Cookies();
Tokyo.render();


let Dubai={
    Loc:"Dubai",
    minCust:11,
    maxCust:38,
    avgCookies:3.7,
    numCookies:[],
    numCustomers:[],
    Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
    Customers:function(){
        for(let i=0;i<this.Hours.length;i++){
            this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
        }
    },
    Cookies:function(){
        // console.log(this.numCustomers);
        for(let i=0;i<this.Hours.length;i++){
            this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);
        }

    },
    render:function(){
    // console.log("render");
        let divEL=document.getElementById("store");
        let articleEl=document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL=document.createElement("h2");
        h2EL.textContent=this.Loc;
        articleEl.appendChild(h2EL);

        let ulEl=document.createElement("ul");
        // console.log(this.numCookies);
        let Total=0;
        for(let i=0;i<this.Hours.length;i++){
            Total+=this.numCookies[i];
            let liEl=document.createElement("li");
            liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal=document.createElement("li");
        // console.log(Total);
        liTotal.textContent=`Total Cookies : ${Total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);
    },
    
}
Dubai.Customers();
Dubai.Cookies();
Dubai.render();


let Paris={
    Loc:"Paris",
    minCust:20,
    maxCust:38,
    avgCookies:2.3,
    numCookies:[],
    numCustomers:[],
    Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
    Customers:function(){
        for(let i=0;i<this.Hours.length;i++){
            this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
        }
    },
    Cookies:function(){
        // console.log(this.numCustomers);
        for(let i=0;i<this.Hours.length;i++){
            this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);
        }

    },
    render:function(){
    // console.log("render");
        let divEL=document.getElementById("store");
        let articleEl=document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL=document.createElement("h2");
        h2EL.textContent=this.Loc;
        articleEl.appendChild(h2EL);

        let ulEl=document.createElement("ul");
        // console.log(this.numCookies);
        let Total=0;
        for(let i=0;i<this.Hours.length;i++){
            Total+=this.numCookies[i];
            let liEl=document.createElement("li");
            liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal=document.createElement("li");
        // console.log(Total);
        liTotal.textContent=`Total Cookies : ${Total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);
    },
    
}
Paris.Customers();
Paris.Cookies();
Paris.render();


let Lima={
    Loc:"Lima",
    minCust:2,
    maxCust:16,
    avgCookies:4.6,
    numCookies:[],
    numCustomers:[],
    Hours:["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm"],
    Customers:function(){
        for(let i=0;i<this.Hours.length;i++){
            this.numCustomers[i]=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
        }
    },
    Cookies:function(){
        // console.log(this.numCustomers);
        for(let i=0;i<this.Hours.length;i++){
            this.numCookies[i]=Math.floor(this.avgCookies*this.numCustomers[i]);
        }

    },
    render:function(){
    // console.log("render");
        let divEL=document.getElementById("store");
        let articleEl=document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL=document.createElement("h2");
        h2EL.textContent=this.Loc;
        articleEl.appendChild(h2EL);

        let ulEl=document.createElement("ul");
        // console.log(this.numCookies);
        let Total=0;
        for(let i=0;i<this.Hours.length;i++){
            Total+=this.numCookies[i];
            let liEl=document.createElement("li");
            liEl.textContent=`${this.Hours[i]} : ${this.numCookies[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal=document.createElement("li");
        // console.log(Total);
        liTotal.textContent=`Total Cookies : ${Total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);
    },
    
}
Lima.Customers();
Lima.Cookies();
Lima.render();
