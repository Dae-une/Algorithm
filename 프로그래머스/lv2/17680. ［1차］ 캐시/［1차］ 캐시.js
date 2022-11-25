function solution(cacheSize, cities) {
    let cacheArr =[]
    let time =0;
    for (let i =0; i <cities.length; i++){
        cities[i] = cities[i].toLowerCase()
        
        let findObj = cacheArr.find((elem)=> elem.name ===cities[i])
        
        if(!findObj){
            let obj = {name:cities[i],idx:i}
            cacheArr.push(obj)
            time+=5
            if(cacheArr.length > cacheSize){
                cacheArr.shift()
            }
        }else{
            let findIdx =cacheArr.indexOf(findObj)
            cacheArr[findIdx].idx =i;
            time++
        }
        cacheArr.sort((a,b)=>{
            if(a.idx>b.idx){
                return 1;
            }else if(a.idx<b.idx){
                return -1
            }
        })
    }
    return time
}