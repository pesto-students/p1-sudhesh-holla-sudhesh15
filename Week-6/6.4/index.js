function maximumProfit(share){

    let maxprofit=0;
    for(let i=0;i<share.length;i++){
       for (let j = i + 1; j < share.length; j++) {
           let profit = share[j] - share[i];
           if (profit > maxprofit)
               maxprofit = profit;
          }
       }
   }
   
let share= [7,1,5,3,6,4];
maximumProfit(share);