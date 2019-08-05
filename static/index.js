
fetch('/index', {
  method: 'GET'
}).then(res => {
  return res.json()
}).then(res => {

  if (res.code == 200) {
    fetch('/show', {
      method: 'GET'
    }).then(res => {
      return res.json()
    }).then(res => {
      res = JSON.parse(res)
      console.log(res, res.length)
      document.body.innerHTML = res.map((page, index) => {
        console.log(page)
        return page.items.map((item, itemIndex) => {
          return `<a href="${item.thumbSrc}" ><img src="${item.thumbSrc}" width="200" height="200"/></a>`
        }).join('')
      }).join('')
    })
  }

})











