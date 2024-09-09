import {
    renderComponents,
    reRenderComponents,
    renderLanguagueSelectComponent
} from "./functions.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (!params?.lang || params.lang != "en" && params.lang != "es") {
    params.lang = "en";
}
if (!params?.sls || params.sls != "false" && params.lang != "true") {
    params.sls = "true";
}
if (!params?.abb || params.abb != "false" && params.abb != "true") {
    params.abb = "false";
}
let languague = params.lang;

const main = () => {
    if(JSON.parse(params.sls.toLowerCase()) === true){
        renderLanguagueSelectComponent();
        const selectLanguague = document.getElementById("languague");
        selectLanguague.value = languague;

        selectLanguague.addEventListener("change", (e) => {
            const value = e.target.value;
            languague = value;
            reRenderComponents(languague);
        })
    }
    if(JSON.parse(params.abb.toLowerCase()) === true){
        document.getElementById("backpro").style.backgroundColor = "#000000";
    }
    renderComponents(languague);
}

main();