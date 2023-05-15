function solution(skill, skill_trees) {
    const skills = skill.split('');
    let count =0;
    for(let i =0;i<skill_trees.length;i++){
        const target = skill_trees[i].split('').filter((el)=>skill.includes(el)).join('');
        if(target ===skill.substring(0,target.length)){
            count++
        }
    }
    return count;
}