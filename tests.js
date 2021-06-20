const chai = window.chai
const expect = chai.expect

describe('getCelsius', () => {
    it('should convert farenheit to celcius for all values in an array', () => {
        expect(getCelsius) [23, 140, 212, 41]) .to.deep.equal([-5, 60, 100, 5])
    })
})
