function solution(park, routes) {
    const moving = {E:[0,1] , W:[0,-1], S:[1,0],N:[-1,0]}
    const width = park[0].length-1
    const height =park.length-1
    let pos =[0,0]
    
    const isValid =(pos)=>{
        if(pos[1] > width || pos[1] <0) return false
        if(pos[0] > height || pos[0] <0) return false
        if(park[pos[0]][pos[1]] === 'X') return false
        return true
    }
    
    for(let i =0; i<park.length;i++){
        const startPoint = park[i].indexOf('S')
        if(startPoint>-1){
            pos =[i,startPoint]
            break;
        }
    }
        console.log(pos)
    routes.forEach((route,index)=>{
        const [direction,move] = route.split(' ')
        const currentPos =[...pos]
        let valid= true
        
        for(let i=0;i<move; i++){
            currentPos[0] +=moving[direction][0]
            currentPos[1] +=moving[direction][1]
            if(!isValid(currentPos)){
                valid=false
                break;
            }
        }
        if(valid){
         pos = currentPos   
        }
    })
    
    
return pos
}