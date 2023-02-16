function solution(a, b, n) {
    let rest=n;
    let count =0;
    while(rest>=a){
        const share =parseInt(rest/a)
        const give = share * a
        const get = share * b
        rest = rest -give +get
        count += get
    }
    return count
}