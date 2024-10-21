import { API_BASE_URL } from "../Component/Constant/url";
import { ApiRouter } from "../Router/Router";
import { getToken, getStorage } from "../utils/Storage";
//signup Api
export const SingUpApi = async (signupData) => {
    const header = {    
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(signupData)
    }
    try {
        const resData = await fetch(`${API_BASE_URL}${ApiRouter.signup}`, header)
        const jsonObjData = await resData.json()
        return jsonObjData;
    } catch (err) {
        console.error(err)
        return { status: "error" };
    }




}

//loginApi
export const LoginApi = async (loginData) => {
    console.log("logindata",loginData)
    const header = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginData)
    }
    try {
        const loginResData = await fetch(`${API_BASE_URL}${ApiRouter.login}`, header)
        console.log("api url",loginResData)
        const jsonObjData = await loginResData.json()
        return jsonObjData;

    } catch (err) {
        console.log(err)
        return { status: "failed" }
    }

}

//Add Employee Data Api
export const EmployeApi = async (emplayeData) => {
    const header = {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getStorage().token}`
        },
        body: JSON.stringify(emplayeData)
    }
    try {
        const res = await fetch(`${API_BASE_URL}${ApiRouter.employe}`, header);
        const jsonObjData = await res.json()
        return jsonObjData;
    }
    catch (err) {
        console.errorz(err)
        return { status: "failed" };
    }

}

export async function getAllEmployeeApi() {
    try {
        const GetRes = await fetch(`${API_BASE_URL}${ApiRouter.listEmployee}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            }
        })
        const GetJsonObj = await GetRes.json()
        return GetJsonObj;
    } catch (err) {
        console.error(err)
        return {}
    }
}



//Delete Api
export async function DeleteApi(id) {
    try {
        const DelRes = await fetch(`${API_BASE_URL}${ApiRouter.deleteEmp}/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "appication/json", "Authorization": `Bearer ${getToken()}` }
        })
        const GetDetRes = await DelRes.json();
        return GetDetRes;
    } catch (err) {
        console.error(err)
    }

}
// Delete api end //


//UPDATE API  START//
export async function UpdateEmpApi(updateData) {
    try {
        const id = updateData._id;
        delete updateData._id;
        const UpdateRes = await fetch(`${API_BASE_URL}${ApiRouter.updateEmp}/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json",

             "Authorization": `Bearer ${getToken()}` },
            body: JSON.stringify(updateData)
        })
        const GetUpdateRes = await UpdateRes.json()
        return GetUpdateRes
    } catch (err) {
        console.error(err)
    }
}

// UPDATE API END

//Upload Api Here

export async function UploadApi(data){
    try{
        const UploadData = await fetch(`${API_BASE_URL}${ApiRouter.uploadProduct}`,{
            method:"POST",
            headers:{
                    "Authorization":`Bearer ${getToken()}`
            },body:data
        })
        const GetRes = await UploadData.json()
        return GetRes;
    }catch(err){
       
        console.log(err)
    }
}

//Upload Api End

//Get All Images Api start

export async function GetAllImagesApi(){
   try{
    const ResGet = await fetch(`${API_BASE_URL}${ApiRouter.allProduct}`,{
        method:"GET",
        headers:{"Content-type":"application/json","Authorization":`Bearer ${getToken()}`}
    })
    const ResObj = await ResGet.json()
    return ResObj;
   }catch(err){
    console.log(err)
   }
}
//Get All Images Api start


//single employee api start
export async function SingleApi(){
    try{
        const ResData = await fetch(`${API_BASE_URL}${ApiRouter.singleEmp}`,{
        method:"GET",
        headers:{"Content-type":"application/json","Authorization":`Bearer ${getToken()}`}
    })
    const Resobj = await ResData.json();
    return Resobj;
    }catch(err){
        console.log(err)
    }
}

// single employee api end