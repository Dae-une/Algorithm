function solution(sizes) {
    let ver =0;
    let hor =0;
    sizes.forEach((size)=>{
        size.sort((a,b)=>a-b)
        ver =Math.max(ver,size[0])
        hor =Math.max(hor,size[1])
    })
    return hor * ver
}