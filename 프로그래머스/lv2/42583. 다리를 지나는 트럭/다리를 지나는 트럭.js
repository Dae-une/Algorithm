function solution(bridge_length, weight, truck_weights) {
    let time=0;
    let weightSum =0;
    const bridge = new Array(bridge_length).fill(0)
    
    let nextTruck = truck_weights.shift();
    weightSum += nextTruck
    bridge.unshift(nextTruck)
    bridge.pop()
    time ++
    
    while(weightSum){
        const passed =bridge.pop();
        weightSum -= passed;
        
        nextTruck = truck_weights.shift()
        if(nextTruck === undefined) nextTruck =0;
        
        if(weightSum + nextTruck > weight){
            bridge.unshift(0);
            truck_weights.unshift(nextTruck)
        }else{
            bridge.unshift(nextTruck)
            weightSum += nextTruck
        }
        time ++
        
    }
    
    return time
    
}