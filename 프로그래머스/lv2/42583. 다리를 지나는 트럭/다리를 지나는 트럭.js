function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = new Array(bridge_length).fill(0)
    let sumWeight =0;    

    let nextTruck = truck_weights.shift()
    bridge.pop()
    bridge.unshift(nextTruck)
    sumWeight +=nextTruck
    time++
    
    while(sumWeight){
        const passed = bridge.pop();
        nextTruck = truck_weights.shift()
        sumWeight -=passed
        
        if(nextTruck === undefined) nextTruck = 0;
        
        if(nextTruck + sumWeight > weight){
            truck_weights.unshift(nextTruck);
            bridge.unshift(0)
        }else{
            bridge.unshift(nextTruck)
            sumWeight +=nextTruck
        }
        
        time++
    }
    
    return time
}