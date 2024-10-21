import { useEffect } from 'react';
import { image_url } from '../../utils/url'
import { API_BASE_URL2, API_BASE_URL3 } from '../Constant/url';
import axios from 'axios';
export default function Courses() {
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
    const onPayment = async (price, itemName) => {
        // console.log(itemName)
        //create order 
        try {
            const options = {
                productId: 1,
                price: price
            }
            const res = await axios.post(`${API_BASE_URL2}`, options)
            const data = res.data;
            console.log(data);



            //intrect with razorpay server
            const PaymentObject = new (window).Razorpay({
                key: "rzp_test_IM97m5PxGMmTcZ",
                order_id: data.id,
                ...data,
                handler: (res) => {
                    const verify = {
                        order_id: res.razorpay_order_id,
                        payment_id: res.razorpay_payment_id,
                        signature: res.razorpay_signature,
                    }
                    axios.post(`${API_BASE_URL3}`,verify).then((res)=>{
                        console.log(res.data);
                        if(res.data.success){
                            // alert(res.data.message)
                            alert( 'payment success')
                        }else{ alert('payment faild')}
                       
                    })
                }
            })
            PaymentObject.open()
        } catch (err) { }
    }


    useEffect(() => {
        loadScript('https://checkout.razorpay.com/v1/checkout.js')
    })
    return (
        <>
            <section>
                <div style={{width:"100%",position:'relative'}}>
                    <button onClick={()=>onPayment(1,"apple")} style={{width:'200px',position:"absolute",top:"50%",backgroundColor:"orange"}}>Pay</button>
                </div>
            </section>
        </>
    )
}