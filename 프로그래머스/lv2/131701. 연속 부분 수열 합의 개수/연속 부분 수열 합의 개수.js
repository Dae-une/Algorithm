function solution(elements) {
    const sumSet =new Set();
    
    const elemLength = elements.length;
    for(let i =1;i<=elemLength;i++){
        let sum=0;
        for(let j =0;j<elemLength;j++){
            if(j===0){
                for(let k =0;k<i;k++){
                    sum += elements[k];
                }
            }
            else{
                    sum -= elements[j-1]
                    sum += elements[(j+i-1) % elemLength]
                }
                
                sumSet.add(sum)
        }
    }
    
    return sumSet.size
}