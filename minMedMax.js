const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
let answer = {min:"",mid:"",max:""}
let min,mid,max
if(n1>n2 && n1>n3){
  max=n1
}else if(n2>n1 && n2>n3){
  max=n2
}else
max=n3


if(n1<n2 && n1<n3){
  min=n1
}else if(n2<n1 && n2<n3){
  min=n2
}else
min=n3

if(n1<n2 && n1>n3 || n1>n2&&n1<n3) {
  mid=n1
}else if(n2>n1 && n2<n3 || n2<n1 && n2>n3){
  mid=n2
} else if(n1==n2||n1==n3){
  mid=max
}else if(n2==n3){
  mid=max
}
else
mid=n3

answer.min=min
answer.mid=mid
answer.max=max
return answer
}
console.log(minMedMax(85,30,1))
console.log(minMedMax(5,1,1))
console.log(minMedMax(0,10,10))



module.exports = minMedMax
