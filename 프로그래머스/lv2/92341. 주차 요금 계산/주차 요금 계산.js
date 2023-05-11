function solution(fees, records) {
    const [baseTime,baseFee,overTime,overFee] = fees;
    const lastTime = 23 * 60 +59;
    const departure ={};
    
    records.forEach((list)=>{
        const [time,number,action] = list.split(' ');
        const minute = calcTimeToMinute(time);
        
        departure[number] = departure[number] || {totalTime:0,actionTime:null};
        
        if(action === 'IN'){
            departure[number].actionTime = minute;
        }else{
            departure[number].totalTime += minute - departure[number].actionTime;
            departure[number].actionTime = null;
        }
    })
    
    const carList = Object.keys(departure).sort((a,b)=> a-b);
    
    const calcPrice =(time)=>{
        if(time <=baseTime) return baseFee
        const calcTime = time -baseTime;
        return baseFee + Math.ceil(calcTime/overTime) * overFee;
    }

    return carList.map((car)=>{
        if(departure[car].actionTime !== null){
            departure[car].totalTime += lastTime - departure[car].actionTime;
        }
        return calcPrice(departure[car].totalTime);
    })
}

function calcTimeToMinute(time){
    const [HH,MM] = time.split(':')
    const hour = parseInt(HH);
    const minute = parseInt(MM);
    
    return hour * 60 + minute
}