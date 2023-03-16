const getExpiredDate =(dateString,month)=>{
    let [year,mon,day]= dateString.split('.').map((v)=>Number(v))
    mon += month
    day -= 1
    if(day ===0){
        day =28;
        mon-=1
    }
    
    if(mon >12){
        const month12Count = Math.floor(mon/12)
        mon =mon - 12 * month12Count;
        year += month12Count;
    }
    if(mon === 0){
        mon +=12;
        year -= 1;
    }
    return [year,mon,day]
}

function solution(today, terms, privacies) {
    const answer = []
    
    privacies.forEach((privacy,index)=>{
        const [date,term] = privacy.split(' ')
        const termPeriod =Number(terms.find((innerTerm)=>{
            return (innerTerm[0] === term)
        }).split(' ')[1])

        const [eYear,eMonth,eDay] = getExpiredDate(date,termPeriod)
        const [year,month,day] = today.split('.').map((v)=>Number(v))
        
        let expired =false
        
        if(year > eYear){
            expired =true;
        }
        if( year=== eYear && month > eMonth){
            expired =true;
        }
        if (year === eYear && month === eMonth && day >eDay){
            expired =true
        }
        if(expired){
            answer.push(index+1)
        }
    })
    
    return answer
}