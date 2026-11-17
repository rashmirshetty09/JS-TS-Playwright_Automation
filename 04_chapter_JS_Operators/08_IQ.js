let environment = "staging";
let baseUrl = environment === "rashmi"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);