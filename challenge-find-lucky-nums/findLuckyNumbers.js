// Write your code below this line.
const luckyNums = (num) => {
    let arr =[]
for (let i = 0; i < num; i++ ){

    let randInt = Math.ceil(Math.random() * 10)
    while(arr.includes(randInt)){
            randInt = Math.ceil(Math.random() * 10)
                set.add(randInt)
    }
    arr.push (randInt)
    //console.log(randInt)
}


}
console.log(luckyNums(6))
console.log(luckyNums(2))
console.log(luckyNums(10))

    const luckySet = (num) => {
        let set = new Set()
        while (set.size < num){
            let randInt = (Math.random() * 10)
            console.log(`OUr Current set: $ {[... set]}, our current randInt:${randInt}`)
            set.randint 
        }
    }