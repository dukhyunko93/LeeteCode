var findRestaurant = function(list1, list2) {
  let sum = list1.length + list2.length;
  let result = [];
  let map = new Map();
  for (let i = 0; i < list1.length; ++i) {
    map.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; ++j) {
    if (sum === (map.get(list2[j])+j)) {
      result.push(list2[j]);
    } else if (sum > (map.get(list2[j])+j)) {
      sum = map.get(list2[j])+j;
      result = [list2[j]];
    }
  }
  return result;
}

console.log(findRestaurant(
  ["Shogun","Tapioca Express","Burger King","KFC"],
  ["KFC","Shogun","Burger King"]
))