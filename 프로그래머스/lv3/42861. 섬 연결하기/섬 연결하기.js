
let obj={}
function solution(n, costs) {
    let answer =0;
    costs.sort((a,b)=>{
        return a[2]-b[2]
    })
    
    for(let i =0; i<n ; i++){
        obj[i] = i
    }
    costs.map((e)=>{
        let cost = union(e);
        if( cost !== -1){
            answer += cost
        }
    })
    return answer
}

const getParent = (node) => {
    if(obj[node] === node) return node;
    return getParent(obj[node])
    }

const union =(node) => {
    let a =getParent(node[0])
    let b =getParent(node[1])
    
    if(a===b){
        return -1;
    }
    if(a>b){
        obj[a] = b;
    }else{
        obj[b] = a;
    }
    
    return node[2]
}