function solution(players, callings) {
    let obj = {};
    players.forEach((v, idx) => obj[v] = idx);

    for(let i =0; i<callings.length; i++){
        let idx = obj[callings[i]];
        let player = players[idx-1];
        players[idx-1] = callings[i];
        players[idx] = player;
        obj[callings[i]]--;
        obj[player]++;
    }
    
    return players;
}