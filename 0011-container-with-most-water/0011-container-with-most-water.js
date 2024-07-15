/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = (h,s=0,e=h.length)=>h.reduce((a,x,i)=>(x=h[i-=s],
 i=h[--e+i],i=e*(i<x?(++s,i):x),a<i?i:a),0);