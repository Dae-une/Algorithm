function solution(name, yearning, photo) {
    var answer = [];
    
    let obj= {}
    for(let i =0; i<name.length; i++){
        obj[name[i]] = yearning[i]
    }
    
    return photo.map((list)=>list.map((person)=>obj[person] ? obj[person] : 0).reduce((acc,cur)=>acc+cur,0))
}