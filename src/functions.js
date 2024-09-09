const {"0":expiricenceJSON,"1":skillsJSON,"2":languaguesJSON,"3":mainJSON,"4":hobbiesJSON,"5":contactJSON} = await Promise.all([
    await (await fetch("src/JSON/expirience.json")).json(),
    await (await fetch("src/JSON/skills.json")).json(),
    await (await fetch("src/JSON/languagues.json")).json(),
    await (await fetch("src/JSON/main.json")).json(),
    await (await fetch("src/JSON/hobbies.json")).json(),
    await (await fetch("src/JSON/contact.json")).json()
]);
import { Component } from "../src/models/Component.js";

const asideElement = document.getElementById("aside");
const descriptionSectionElement = document.getElementById("description");
const nameDivContainerElement = document.getElementById("name");
const professionalTitleElement = document.getElementById("professionalTitle");

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DIC'];
const components = [];
const limitStars = 5;
const bornyear = 2002;
const bornDay = 19;
const bornMonth = 7;

// Functions ----------------------------------------------------
export const getYearsOld = () => {
    const date = new Date();
    date.setDate(bornDay);
    date.setMonth(bornMonth - 1);
    date.setFullYear(bornyear);
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - date; // Difference in milliseconds
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Approximate milliseconds in a year (accounting for leap years)

    const differenceInYears = differenceInMilliseconds / millisecondsInYear;
    const yearsOld = differenceInYears.toString().split(".")[0];
    return yearsOld;
}
/**
 * 
 * @param {Date} date
 * @returns 
 */
export function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0'); // Get day and ensure it is two digits
    const month = months[date.getMonth()]; // Get month abbreviation
    const year = date.getFullYear(); // Get year
    return `${day}/${month}/${year}`; // Return formatted date
}
/**
 * 
 * @param {number} prop
 * @returns 
 */
export const getStars = (prop) => {
    return `
    ${
        Array.apply(null, { ...[], length: prop }).map(function (_, i) {
            return i + 1;
        }).map(()=>(
            `
                <svg class="filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            `
        )).join("")
    }
    ${
        prop.toString().includes(".") ?
            `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7l0-305.6 52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"/></svg>
            `
            :
            ""
    }
    ${
        Array.apply(null, { ...[], length: limitStars - prop }).map(function (_, i) {
            return i + 1;
        }).map(()=>(
            `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
            `
        )).join("")
    }
    
    `
}

// HEDAER CONTENT
export const renderLanguagueSelectComponent = () => {
    const select = document.createElement("select");
    select.id = "languague";
    select.name = "languague";

    select.innerHTML = `
        <option value="es">Español</option>
        <option value="en">English</option>
    `

    nameDivContainerElement.append(select);
    return (new Component(
        "languagueSelect",
        select,
        renderLanguagueSelectComponent
    ));
}

export const renderWrapperComponent = (languague) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add("wrapper");

    wrapperElement.innerHTML = contactJSON[languague].map((contact)=>(
        `
            <a
                href="${contact.href}"
                target="__BLANK"
                class="iconsocial ${contact.type.toLowerCase()}"
            >
                <div class="tooltip">${contact.type}</div>
                <span>
                    <i class="${contact.fontawesomeIcon}"></i>
                </span>
            </a>
        `
    )).join("");

    nameDivContainerElement.append(wrapperElement);
    return (new Component(
        "wrapper",
        wrapperElement,
        renderWrapperComponent
    ));
}

// DESCRIPTION CONTENT 

export const renderProfileComponent = (languague) => {
    const profileElement = document.createElement("div");
    profileElement.classList.add("profile");

    const title = document.createElement("h3");
    title.innerText = mainJSON[languague].appTitles.profile;
    professionalTitleElement.innerText = mainJSON[languague].professionalTitle;

    const presentation = document.createElement("div");
    presentation.id = "presentation";
    presentation.innerHTML = mainJSON[languague].presentation.join("");
    
    const mainDescription = document.createElement("p");
    mainDescription.innerHTML = mainJSON[languague].description;

    const professionalExperiencesListElement = document.createElement("ul");
    professionalExperiencesListElement.innerHTML = [...mainJSON[languague].professionalExperiences.map((ex)=>(
        `
            <h4>${ex.name}</h4>
            ${
                ex.descriptions.map((description)=>(
                    `
                        <li>${description}</li>
                    `
                )).join("")
            }
        `
    )),
    `
        <h4>${mainJSON[languague].keySkills.name}</h4>
        ${
            mainJSON[languague].keySkills.skills.map((description)=>(
                `
                    <li class="keySkills">${description}</li>
                `
            )).join("")
        }
    `].join("")
    

    profileElement.append(...[
        title,
        presentation,
        mainDescription,
        professionalExperiencesListElement
    ]);
    descriptionSectionElement.append(profileElement);

    const yearsOldElement = document.getElementById("yearsOld");
    if(yearsOldElement) yearsOldElement.innerText = `${getYearsOld()}`;

    return(new Component(
        "profile",
        profileElement,
        renderProfileComponent,
        true
    ));
}

export const renderEducationComponent = (languague) => {
    const educationElement = document.createElement("div");
    educationElement.classList.add("education");

    const title = document.createElement("h3");
    title.innerText = mainJSON[languague].appTitles.education;

    const education = document.createElement("div");
    education.innerHTML = expiricenceJSON[languague].education.map((expirience)=>(
    `
            <div>
                <div>
                    <h4>${expirience.institution}</h4>
                    ${
                        expirience?.logo ?
                           `
                            <figure>
                                <img src="${expirience.logo}" alt="${expirience.institution} logo">
                            </figure>
                           ` 
                           :""
                    }
                </div>
                <div>
                    <span>${expirience.degree}</span>
                    <span>${expirience.dates ?? ""}</span>
                </div>
            </div>
        `
    )).join("");
    educationElement.append(...[
        title,
        education
    ]);
    descriptionSectionElement.append(educationElement);
    return(new Component(
        "education",
        educationElement,
        renderEducationComponent,
        true
    ));
}

export const renderEmploymentHistoryComponent = (languague) => {
    const employmentHistoryElement = document.createElement("div");
    employmentHistoryElement.classList.add("history");

    const title = document.createElement("h3");
    title.innerText = mainJSON[languague].appTitles.employmentHistory;

    const employmentHistory = document.createElement("div");
    employmentHistory.innerHTML = expiricenceJSON[languague].employment_history.map((hisotry)=>(    
        `
            <div>
                <div>
                    <h4>${hisotry.company}</h4>
                    ${
                        hisotry?.logo ?
                        `
                            <figure>
                                <img src="${hisotry.logo}" alt="${hisotry.institution} logo">
                            </figure>
                        ` 
                        :""
                    }
                </div>
                <span>${hisotry.position}</span>
                <span>${hisotry.dates}</span>
                ${
                    hisotry?.contributions ?
                        `<section>
                            ${
                                hisotry.contributions.map((contribution)=>(
                                    `
                                        <div>
                                            <h6>${contribution.name}</h6>
    
                                            <ul>
                                                ${
                                                    contribution.tasks.map((task)=>(
                                                        `
                                                            <li>
                                                                ${task}
                                                            </li>
                                                        `
                                                    )).join("")
                                                }
                                            </ul>
                                        </div>
                                    `
                                )).join("")
                            }
                        </section>
                        `
                        :""
                }
            </div>
        `
    )).join("");
    employmentHistoryElement.append(...[
        title,
        employmentHistory
    ]);
    descriptionSectionElement.append(employmentHistoryElement);
    return(new Component(
        "history",
        employmentHistoryElement,
        renderEmploymentHistoryComponent,
        true
    ));
}

// ASIDE CONTENT 
export const renderSkillsComponent = (languague) => {
    const skillsElement = document.createElement("div");
    skillsElement.classList.add("skills");

    const title = document.createElement("h4");
    title.innerText = mainJSON[languague].appTitles.skills;

    const skills = document.createElement("div");
    skills.id = "skillsContent";
    skills.innerHTML = skillsJSON.map((section)=>(
        `
            <section>
                <h5>${section.section}</h5>
                <div>
                    ${
                        section.skills.map((skill)=>(
                            `
                                <div>
                                    <div>
                                        <p>${skill.name}</p>
                                        <figure>
                                            <img src="${skill.svgIcon}" alt="${skill.name}">
                                        </figure>
                                    </div>
                                    <div class="level">
                                        ${
                                            getStars(skill.knowledge)
                                        }
                                    </div>
                                </div>
                            `
                        )).join("")
                    }
                </div>
    
            </section>
        `
    )).join("");

    skillsElement.append(...[
        title,
        skills
    ]);
    asideElement.append(skillsElement);
    return(new Component(
        "skills",
        skillsElement,
        renderSkillsComponent,
        true
    ));
}

export const renderLanguaguesComponent = (languague) => {
    const languaguesElement = document.createElement("div");
    languaguesElement.classList.add("languagues");

    const title = document.createElement("h4");
    title.innerText = mainJSON[languague].appTitles.languagues;

    const languagues = document.createElement("div");
    languagues.id = "languaguesContent";
    languagues.innerHTML = languaguesJSON[languague].map((skill)=>(
        `
            <div>
                <p>${skill.name}</p>
                <div class="level">
                    ${
                        getStars(skill.knowledge)
                    }
                </div>
            </div>
        `
    )).join("");

    languaguesElement.append(...[
        title,
        languagues
    ]);
    asideElement.append(languaguesElement);
    return(new Component(
        "languagues",
        languaguesElement,
        renderLanguaguesComponent,
        true
    ));
}

export const renderHobbiesComponent = (languague) => {
    const hobbiesElement = document.createElement("div");
    hobbiesElement.classList.add("hobbies");

    const title = document.createElement("h4");
    title.innerText = mainJSON[languague].appTitles.hobbies;

    const template = document.createElement("template");
    template.innerHTML = hobbiesJSON[languague].map((hobbie)=>(
        `
            <div class="hnai">
                <p>${hobbie.name}</p>
                <img
                    class="block none himgs"
                    src="${hobbie.icon}"
                    alt=""
                />
            </div>
        `
    )).join("");

    hobbiesElement.append(...[
        title,
        ...template.content.children
    ]);


    asideElement.append(hobbiesElement);
    return(new Component(
        "hobbies",
        hobbiesElement,
        renderHobbiesComponent,
        true
    ));
}

export const renderContactComponent = (languague) => {
    const contactElement = document.createElement("div");
    contactElement.classList.add("contact");

    const title = document.createElement("h4");
    title.innerText = mainJSON[languague].appTitles.contact;

    const contactDesktopDivElement = document.createElement("div");
    contactDesktopDivElement.classList.add("res-none");
    contactDesktopDivElement.innerHTML = contactJSON[languague].map((contact)=>(
        `
            <div>
              <label for="${contact.type.toLowerCase()}">${contact.type}:</label>
              <a id="${contact.type.toLowerCase()}" href="${contact.href}" target="__BLANK">${contact.value}</a>
            </div>
        `
    )).join("");

    const contactMobileDivElement = document.createElement("div");
    contactMobileDivElement.classList.add(...["none","block","mini-footer"]);
    contactMobileDivElement.innerHTML = contactJSON[languague].map((contact)=>(
        `
            <a href="${contact.href}" target="__BLANK">
                <img class="himgs" src="${contact.icon}" alt="" />
            </a>
        `
    )).join("");


    contactElement.append(...[
        title,
        contactDesktopDivElement,
        contactMobileDivElement
    ]);

    asideElement.append(contactElement);
    return(new Component(
        "contact",
        contactElement,
        renderContactComponent,
        true
    ));
}

// RenderComponents
export const renderComponents = (languague) => {
    components.push(renderWrapperComponent(languague));
    components.push(renderSkillsComponent(languague));
    components.push(renderProfileComponent(languague))
    components.push(renderEducationComponent(languague));
    components.push(renderEmploymentHistoryComponent(languague));
    components.push(renderLanguaguesComponent(languague));
    components.push(renderHobbiesComponent(languague));
    components.push(renderContactComponent(languague));
}

export const reRenderComponents = (languague) => {    
    const reRederableComponents = components.filter((c)=>c.rerender);
    reRederableComponents.forEach((c)=>{
        c.element.remove();
        c.element = c.renderFunction(languague).element;
    });
}