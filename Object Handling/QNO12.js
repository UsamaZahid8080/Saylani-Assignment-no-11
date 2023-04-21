//Write a JavaScript function to parse an URL.
function parser(url){
    let parser = new URL(url);
    return{
        protocol:parser.protocol,
        pathname:parser.pathname,
        hostname:parser.hostname,
        port:parser.port,
        search:parser.search,
        hash:parser.hash,
    }
};
let url = "https://www.google.com/";
let parsed = parser(url);
console.log(parsed);

    