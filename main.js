console.log('connected')
const renderImages = (dataArray) => {
    console.log(dataArray)
    dataArray.forEach(cardInfo => {
        console.log(cardInfo)
    })
}

fetch("https://isro.vercel.app/api/spacecrafts")
.then(response => response.json())
.then(data => renderImages(data.spacecrafts))
