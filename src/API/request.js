export const req=async ()=>{
const request=await fetch()
const response= await JSON.parse(request)
return response
}