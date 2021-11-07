export default function sum(numbers: string) {
    const DELIMITERS = /,|\n/gi;

    let sequenceNotAllowed = numbers.indexOf(",\n");

    if (sequenceNotAllowed === -1) {
        let numberList = numbers.split(DELIMITERS);
        let result: number = 0;

    numberList.forEach((number) => {
        result += Number(number);
    });

    return result;
    } else {
        return `Number expected but '\n' found at position ${
            sequenceNotAllowed + 1
        }.`;
    }

    /*     const allowedCharacters :string[] = [
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
            result += Number(lastNumber)
            lastNumber = ''
        }
    }

    //Solución para que pase el test:
    //if(lastNumber != '') result += Number(lastNumber)

    return result */
}
