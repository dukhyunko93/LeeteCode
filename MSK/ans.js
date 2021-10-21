function solution(A) {
  var ans = A[0];
  for (i = 1; i < A.length; i++) {
      if (ans > A[i]) {
          ans = A[i];
      }
  }
  return ans;
}
let A = [-1, 1, -2, 2]

console.log(solution(A));