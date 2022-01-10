import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cart from "../Profile_Page/Cart";


function View_Cart(props){
    const [userInfo,setUserInfo] = useState()
    const userId = props.userId

    useEffect(()=>{
        axios.get(`/cart/${userId}`)
            .then((res)=>setUserInfo(res.data))
    },[])

    return(
        <div>
            <h1><strong>Cart</strong></h1>
            {userInfo===undefined?''
        :
                <Cart cart={userInfo.cart}/>}
    </div>
)
}

export default View_Cart
