var climbStairs = function(n) {
  if(n === 0)  return 0
  if(n === 1)  return 1
  if(n === 2)  return 2;
  var arr = [0,1,2]
  for(let i = 3; i <= n; i++) {
      arr[i] = arr[i-1] + arr[i-2];
      console.log(i, arr[i])
  }
  return arr[n];
};

console.log(climbStairs(6));