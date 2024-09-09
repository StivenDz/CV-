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
    params.sls = true;
}
let languague = params.lang;

const main = () => {
    if(params.sls == true){
        renderLanguagueSelectComponent();
        const selectLanguague = document.getElementById("languague");
        selectLanguague.value = languague;

        selectLanguague.addEventListener("change", (e) => {
            const value = e.target.value;
            languague = value;
            reRenderComponents(languague);
        })
    } 
    renderComponents(languague);
}

main();