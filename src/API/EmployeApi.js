import { API_BASE_URL } from "../Component/Constant/url";
import { ApiRouter } from "../Router/Router";
import { getStorage } from "../utils/Storage";



//Get All Employee Data Api
export async function GetEmpData(){
    const GetRes = await fetch(`${API_BASE_URL}${ApiRouter.employe}`)
    const GetJsonObj = await GetRes.json()
    console.log(GetJsonObj)
}
