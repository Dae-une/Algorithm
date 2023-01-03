function solution(skill, skill_trees) {
    let regExp = new RegExp(`[^${skill}]`,'g')
    
    const result = skill_trees.map((trees)=> trees.replace(regExp,'')).filter((x)=>{
        return skill.indexOf(x) === 0 || x ===''
    })
    
    return result.length
}