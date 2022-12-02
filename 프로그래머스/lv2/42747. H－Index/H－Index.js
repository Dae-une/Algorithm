function solution(citations) {
    const arr = citations.sort((a,b) => b-a)
    console.log(arr)
    let answers = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < arr[i]) {
            answers++;
        }
    }

    return answers;
}