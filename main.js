console.log('connected')
const renderImages = (dataArray) => {
    console.log(dataArray)
    dataArray.forEach(cardInfo => {
        console.log(cardInfo.name)
        const img = document.createElement("img")
        console.log(img)
    })
}

fetch("https://isro.vercel.app/api/spacecrafts")
.then(response => response.json())
.then(data => renderImages(data.spacecrafts))
