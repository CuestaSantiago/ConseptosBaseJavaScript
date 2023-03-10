// const getImagenPromesa = ()=> new Promise(resolve => resolve('https://ajskdhasjdajs.com'))
// getImagenPromesa().then(console.log)


const getImagen = async () => {
    try {
        const apiKey = "x18uq64CN6LPzQ7aW2eaCkw2cTrk7tPW";
        const resp = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.write(url);
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error)
    }
 
};

export{
    getImagen
}