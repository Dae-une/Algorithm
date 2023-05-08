function solution(bridge_length, weight, truck_weights) {
    let time =0;
    const bridge =new Array(bridge_length).fill(0);
    let weightSum =0;
    
    let nextTruck = truck_weights.shift();
    bridge.pop();
    bridge.unshift(nextTruck);
    weightSum += nextTruck;
    time++
    
    while(weightSum){
        const passed = bridge.pop();
        nextTruck = truck_weights.shift();
        weightSum -= passed;
        
        if(nextTruck === undefined) nextTruck =0;
        
        if(weightSum + nextTruck > weight){
            truck_weights.unshift(nextTruck);
            bridge.unshift(0);
        }else{
            bridge.unshift(nextTruck);
            weightSum += nextTruck;
        }
        
        time++;
    }
    return time;
}