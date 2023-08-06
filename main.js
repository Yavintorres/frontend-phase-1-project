console.log('connected')

fetch("https://isro.vercel.app/api/spacecrafts")
.then(response => response.json())
.then(data => console.log(data))