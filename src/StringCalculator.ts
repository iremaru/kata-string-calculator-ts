export default function sum (numbers: string) {
    
    const allowedCharacters :string[] = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '.',
    ]

    let result :number = 0
    let lastNumber :string = ''

    for (const character of numbers) {
        
        if(allowedCharacters.includes(character))
        {
            lastNumber += character
        } else {
            //result = '' ? 0 : += Number(lastNumber)
            result += Number(lastNumber)
            lastNumber = ''
        }
    }

    //Solución para que pase el test:
    //if(lastNumber != '') result += Number(lastNumber)

    return result
}
