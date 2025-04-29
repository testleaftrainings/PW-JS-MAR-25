
import { expect, test } from "@playwright/test";

//Endpoint

let accessToken:any
let instanceUrl:any
let tokenType:any
let id : any
const grant_type= "password"
const client_id= "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB"
const client_secret= "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260"
const username= "ravindran.ramdas@testleaf.com"
const password= "Ravitest#1432"

test.describe.serial(`API testing of Salesforce`,async () => {
test(`Generate Oauth`, async ({ request }) => {

    const endPointUrl = "https://login.salesforce.com/services/oauth2/token"

    const response = await request.post(endPointUrl, {
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        form: {
            "grant_type": grant_type,
            "client_id": client_id,
            "client_secret": client_secret,
            "username": username,
            "password": password
        }
    })

    const resBody = await response.json();
    console.log(resBody);
    accessToken = resBody.access_token
    instanceUrl = resBody.instance_url
    tokenType = resBody.token_type
    console.log(`${tokenType} ${accessToken} ${instanceUrl}`);  
    

})

test(`Create Lead`,async({request})=>{

    const response = await request.post(`${instanceUrl}/services/data/v63.0/sobjects/Lead/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${accessToken}`
        },
        data: {
            "lastname": "Ravindran",
            "company": "Testleaf"
        }
    })
const responseBody = await response.json()
id = responseBody.id;
console.log(id);
expect(response.status()).toBe(201)
expect(response.statusText()).toBe("Created")

})

/* test(`Update the lead`, async ({request}) => {

    const resp = await request.patch(`${instanceUrl}/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${accessToken}`
        },
        data: 
            {
                "lastname":"Ravindran Ramdas",
                "company":"Testleaf",
                "MobilePhone":"1111111111111"
            }
        
    })
    const respBody = await resp.json();
     console.log(respBody);
    
    console.log(`${resp.status()}--${resp.statusText()}`);
   // expect(respBody.result.sys_class_name).toBe("incident")
}) */


})