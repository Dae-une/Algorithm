function solution(msg) {
    let answer = [];
    const dictionary = ['']
    for(let i =65; i <91;i++){
        dictionary.push(String.fromCharCode(i))
    }
    
    for(let i =0,j; i<msg.length;i=j){
        let current =msg[i];
        
        for(j = i+1; msg.length; j++){
            let next = msg[j];
            if(!dictionary.includes((current+next))){
                dictionary.push(current+next);
                break;                
               }
            current += next;
        }
        answer.push(dictionary.indexOf(current))
    }  
    return answer
}





    

