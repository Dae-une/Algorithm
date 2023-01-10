function solution(n, lost, reserve) {
    var answer = 0;
    const noReserveLost =lost.sort((a,b)=> a-b).filter((lost)=> !reserve.includes(lost))
    let hasReserve = reserve.sort((a,b)=> a-b).filter((reserve) => !lost.includes(reserve))
    
    const finalLost = noReserveLost.filter((lost)=>{
        
        const lend = hasReserve.find((reserve)=> Math.abs(reserve-lost) === 1)
        
        if(!lend) return lost;
        
        hasReserve = hasReserve.filter((reserve) => reserve !== lend)
    })

    return n - finalLost.length;
}