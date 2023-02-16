function solution(food) {
    const arr=[]
    food.map((num)=>{
        arr.push(parseInt(num/2))
    })
    let nums =''
    arr.map((num,index)=> {
        if(num >0){
         nums = nums + String("").padStart(num,index)   
        }
    })
    const reverse =(str)=>{
        return str.split("").reverse().join("");
    }
    
    return nums + '0'+ reverse(nums)
}