import{test,expect,request} from '@playwright/test'
test("how to arrange PUT,POST,PATCH validations", async({request})=>{
    const response=await request.post("https://petstore.swagger.io/v2/store/order",{
    data:{
   "id" : 10,
  "petId" : 60,
  "quantity" : 10,
  "shipDate": "2026-10-16T14:27:57.448Z",
  "status": "placed",
  "complete": true
    }
})
console.log(response);
//how to fetch reponse body
var resbody= await response.json();
console.log(resbody);
})
//get and delete
test("how to arrange GET, DELETE validations", async({request})=>{
const response=await request.get("https://petstore.swagger.io/v2/pet/8000")
console.log(response);
//how to fetch reponse body
var resbody= await response.json();
console.log(resbody);
})
