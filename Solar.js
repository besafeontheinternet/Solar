let submitButton = document.querySelector('#submit')

submitButton.addEventListener("click", (e)=> {
    e.preventDefault()
    
    let address = document.querySelector('#Address').value
    let credit = document.querySelector('#Credit').value
    
    let info = {
        credit:credit,
        address:address
    }
    
     firebase.database().ref('/').push(info)
    
  })
  
  
  