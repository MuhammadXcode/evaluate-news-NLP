import validURL from './checkURL'

const postMyDataFun = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
      return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const handleSubmit = async () => {
  const articleURL = document.getElementById('article-url').value
  if (validURL(articleURL)) {
    const myData = await postMyDataFun('http://localhost:8081/add-url', {
        articleURL
    })
    document.getElementById('text').textContent = myData.text
    document.getElementById('agreement').textContent = myData.agreement
    document.getElementById('confidence').textContent = myData.confidence
    document.getElementById('score_tag').textContent = myData.score_tag
    document.getElementById('subjectivity').textContent = myData.subjectivity
    document.getElementById('irony').textContent = myData.irony
    console.log(myData)
  } else {
    alert('Re-enter a valid URL please!!')
  }
}

export default handleSubmit