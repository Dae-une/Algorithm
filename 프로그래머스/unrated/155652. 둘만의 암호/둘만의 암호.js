function solution(s, skip, index) {

    skip = skip.split('').map((str)=>str.charCodeAt())
    s= s.split('').map((str)=>str.charCodeAt())
    const z = 'z'.charCodeAt()    

    const result = s.map((num)=>{
        
        let newIndex =index
        for(let i =0; i<newIndex; i++){
            if(num === z){
                num -=25;
            }else{
                num++
            }
            
            if(skip.includes(num)){
                newIndex++
            }  
            
        }
        
        return String.fromCharCode(num)
    })
return result.join('')
}