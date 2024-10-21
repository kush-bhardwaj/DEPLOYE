export function ShowEmployeDetail({ShowData}){
    console.log(ShowData)
    return(
        <>
            <div className="OuterDiv">
                
                <div className="InnerDiv">
                <h1>Employee Details</h1>
                    <h5>Name :- {ShowData?.empName}</h5>
                    <h5>Email :- {ShowData?.empEmail}</h5>
                    <h5>Age :- {ShowData?.empAge}</h5>
                    <h5>Field :- {ShowData?.empField}</h5>
                </div>
            </div>
        </>
    )
}