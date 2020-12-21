const languages = ['javascrtipt','c++','python','java'];
const dsl = ['SQL','HTML','CSS','NoSQL'];

const allLanguages = [...languages,...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const courseDataForYear = {
    name: 'Projektowanie i programowanie Front-End',
    shortcut: 'PPFront',
    year: '2',
    content:{
        types:{
            lectures:true,
            labolatories:true,
            projects:true
        },
        hours:{
            lectures:15,
            labolatories:15,
            projects:15
        },
        duration:{
            start: 2020,
            end:2021
        }          
    }
}