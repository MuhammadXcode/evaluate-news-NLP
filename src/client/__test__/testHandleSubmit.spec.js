// to solve ReferenceError: regeneratorRuntime is not defined
import 'babel-polyfill'

import handleSubmit from '../js/formHandler'

describe('Client Test', () => {
    // Add your test cases to test client
    test('testing the handleSubmit()',() =>
    {
        expect(handleSubmit).toBeDefined()
    })
})
