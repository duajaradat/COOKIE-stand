'use strict'

let General={
    Loc:"",
    minCust:0,
    maxCust:0,
    avgCookies:0,
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
// Sattle.Customers();
// Sattle.Cookies();
// Sattle.render();




function stores(name,min,max,avg){
    General.Loc= name;
    General.minCust=min;
    General.maxCust=max;
    General.avgCookies=avg;
    General.Customers();
    General.Cookies();
    General.render();
}
stores("Sattle",23,65,6.3);
stores("Tokyo",3,24,1.2);
stores("Dubai",11,38,3.7);
stores("Paris",20,38,2.3);
stores("Lima",2,16,4.6);