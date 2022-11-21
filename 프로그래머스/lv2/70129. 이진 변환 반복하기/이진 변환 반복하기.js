function solution(s) {
    
    const removeZero=(s)=>{
        const removed=s.split('').filter((n)=> n !=='0').join('');
        return {removed,zeroCount:s.length-removed.length}
    }
    
    const convertToBinary = (s, turnCount, removedCount) => {
    if (s === '1') return [turnCount, removedCount];
    const { removed, zeroCount } = removeZero(s);
    return convertToBinary(removed.length.toString(2), turnCount + 1, removedCount + zeroCount);
  };
    
    
    return convertToBinary(s,0,0)
}