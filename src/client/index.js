//  get the button for submit
import handleSubmit from './js/formHandler'
import { validURL } from './js/checkURL'
// TODO: include your scss file here
import './styles/style.scss'

//  add event listener to it when the click to call handleSubmit function
window.addEventListener('DOMContentLoaded', () => {
    console.log('Dom has been loaded and parsed, Thank you!');
    // Get Value of the input for URL
    const myFrom = document.getElementById('form')
     
    myFrom.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit()
    })
});
export {handleSubmit}
