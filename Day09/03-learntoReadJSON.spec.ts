import { test } from "@playwright/test";
import credentials from '../../Data/login.json'
import fs from 'fs'

/* for(let data of credentials){

test(`Learn to read data from JSON  ${data.TCaseId}`,async()=>{

console.log(data.Username);
console.log(data.Password);

})
} */

test(`Learn to read data from JSON `,async()=>{
const logincredentials = JSON.parse(fs.readFileSync("Data/login.json",'utf-8'));

logincredentials.forEach(element=>{
console.log(element.TCaseId);

})
})

