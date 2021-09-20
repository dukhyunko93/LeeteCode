var fib = function(n) {
  const map = new Map()
  map.set(0,0)
  map.set(1,1)
  map.set(2,1)

  for (let i = 3; i <= n; i++){
    map.set(i, (map.get(i - 1) + map.get(i - 2)));
  }
  return map.get(n);
};

console.log(fib(6));
