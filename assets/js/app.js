const loadInformation = async() => {

    try {
        const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=2joXHeTW2Gelt0JzPVNYVhzsN7wzxfG6VH4smHJO&feedtype=json&ver=1.0');
        console.log(response);

        const data = response.text();
        console.log(data);
        return data;
        
    } catch(error){
        console.log(error);
    }
}

// async function main() {
//     const a = await loadInformation();
//     console.log(a);
// }

// main();