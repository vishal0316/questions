/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    
for(let i=0;i<Math.pow(2,31);i++){
    if(i*i==x){
        return(i);    
        
    }
    if(i*i>x){
        return(i-1);
        
    }
        
    
}
};