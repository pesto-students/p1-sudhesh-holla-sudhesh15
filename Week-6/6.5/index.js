function pairValue(A,B){
    
    for (let i = 0; i <A.length; i++) {
        for (let j = 1; j < A.length; j++) {
            let a = A[j] - A[i];
            if (a == B) {
                return 1; 
               
            }
       }
    }     
    return 0;
}
let A = [5, 10, 3, 2, 50, 80];
let B = 78;
A.sort(function(a, b){
    return a - b
});
 var fn = pairValue(A,B);
 console.log(fn);