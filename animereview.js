fetch(`https://kitsu.io/api/edge/anime?page[limit]=1&page[offset]=${Math.floor(Math.random() * 10000) + 1} `
)
    .then((response) => response.json())
    .then(function(data) {
        console.log(data);
    })
