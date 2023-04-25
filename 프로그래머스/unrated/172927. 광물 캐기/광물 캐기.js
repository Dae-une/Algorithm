function solution(picks, minerals) {
    const result= [];
    
    const recursion=(picks,minerals,fatigue)=>{
        if(picks.every((pick)=>pick === 0)) return result.push(fatigue);
        
        for(let i=0; i<picks.length;i++){
            if(picks[i]){
                let count =5;
                const tempPick =picks.slice();
                const tempMinerals =minerals.slice();
                let tempFatigue = fatigue;
                
                while(count > 0 && tempMinerals.length){
                    const target = tempMinerals.shift();
                    if( i === 1 && target === 'diamond'){
                        tempFatigue +=5;
                    }else if ( i ===2 && target === 'diamond'){
                        tempFatigue +=25;
                    } else if ( i=== 2 && target === 'iron'){
                        tempFatigue +=5;
                    }else{
                        tempFatigue +=1;
                    }
                    count-=1;
                }
                
                if(tempMinerals.length === 0){
                    return result.push(tempFatigue)
                }
                tempPick[i]-=1;
        
                recursion(tempPick,tempMinerals,tempFatigue)
            }
        }
    }
    recursion(picks,minerals,0)
    return Math.min(...result)
}