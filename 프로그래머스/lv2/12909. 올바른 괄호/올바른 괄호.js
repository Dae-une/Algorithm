function solution(s){
  let count = 0;
  for (const item of s) {
    if (item === "(") count += 1;
    if (item === ")") count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}