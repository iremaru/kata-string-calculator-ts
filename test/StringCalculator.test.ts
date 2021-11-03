import sum from '../src/StringCalculator'

describe('StringCalculator should ', () => {

    /*
     * TODO: LIST
     * - "" -> 0
     * - "1,2,3" -> 6
    */

    it('not sum not numbers', () => {
        expect(sum("")).toEqual(0)
    })

    it('sum separated numbers', () => {
      expect(sum("0")).toEqual(0)
    })

    it('sum separated numbers by commas', () => {
      expect(sum('1,2,3')).toEqual(6)
    })

})
