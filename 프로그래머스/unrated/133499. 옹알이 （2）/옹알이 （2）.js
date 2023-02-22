function solution(babbling) {
    const wording = ['aya','ye','woo','ma']
    let count =0;
    for(let i =0; i<babbling.length; i++){
        let babble =babbling[i]
        for(let j=0; j<wording.length;j++){
            if(babble.includes(wording[j].repeat(2))){
                break;
            }
            babble = babble.split(wording[j]).join(' ')
        }
        if(babble.split(' ').join('').length === 0){
            count ++
        }
    }
    
    return count
}