// : import the url check function
// const validator = require('../src/client/js/urlValidator');
import validURL from "../js/checkURL"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(validURL).toBeDefined()
    })

    // test("This URL is valid", () => {
    //     expect(validator('https://www.bbc.com/news/av/world-asia-59553764')).toBe(true);
    // });

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(validURL('MohammedAshraf')).toBe(false)
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(validURL('http://example.com')).toBeTruthy()
    })
})
