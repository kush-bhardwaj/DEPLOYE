import { useEffect, useState } from "react"
import { GetAllImagesApi, SingleApi, UploadApi } from "../../../API/Api"

export default function UploadFile() {
    const [send, setSend] = useState()
    function datahandle(event) {
        if (event.target.name === 'image') {
            setSend({ ...send, [event.target.name]: event.target.files[0] })
        }
        else { setSend({ ...send, [event.target.name]: event.target.value }) }
    }
    async function handleChange(event) {
        event.preventDefault()
        const formdata = new FormData();
        formdata.append("productName", send.productName)
        formdata.append("image", send.image)
        const res = await UploadApi(formdata)
        if (res.status === 'success') { alert('Upload SuccessFull') }
        else {
            console.log(res)
            alert("Upload Failed")
        }

    }
    //all product api calling  end
        return (<>
        <form onSubmit={handleChange}>
            <input type='text' name="productName" onChange={datahandle}></input>
            <input type="file" name="image" onChange={datahandle}></input>
            <input type="submit" value="Submit"></input>
        </form>
    </>
    )
}


