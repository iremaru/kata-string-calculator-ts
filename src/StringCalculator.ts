export default function sum (numbers: string) {

    let numberList = numbers.split(',')
    let result :number = 0
    
    numberList.forEach( number => {
        result += Number(number)
    })

    return result
}
