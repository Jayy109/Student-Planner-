import React from 'react'
import { ethers } from 'ethers'
import axios from 'axios'
import AI from './img/AI.jpg'
import web from './img/webdev.jpg'
import appdev from './img/appdev.jpg'
import comp from './img/compiler.jpg'
import dbms from './img/dbms.jpg'
import ML from './img/ML.jpg'

const API_URL = 'http://localhost:4000'

const ITEMS = [
    {
        id: 1,
        price: ethers.utils.parseEther('10')
    },
    {
        id:2,
        price: ethers.utils.parseEther('20')
    },
    {
        id:3,
        price: ethers.utils.parseEther('5')
    },
    {
        id:4,
        price: ethers.utils.parseEther('50')
    },
    {
        id:5,
        price: ethers.utils.parseEther('200')
    },
    {
        id:6,
        price: ethers.utils.parseEther('55')
    }
]

function Store({ paymentProcessor, dai}) {

    const buy = async item => {
        const response1 = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`)
        const tx1 = await dai.approve(paymentProcessor.address, item.price)
        await tx1.wait()

        const tx2 = await paymentProcessor.pay(item.price, response1.data.paymentId)
        await tx2.wait()

        await new Promise(resolve => setTimeout(resolve, 5000))

        const response2 = await axios.get(`${API_URL}/api/getItemUrl/${response1.data.paymentId}`)
        console.log(response2)
        alert(response2.data.url)
    }

    return (
        <div>
        <ul className='flexbox'>
            
            <li className='product'>
                <img src={web} />
               <div className='description'>Complete Web Devlopment Course</div>
                <strong><h5>50 DAI</h5></strong>
                <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[0])} >
                    Buy
                </button>
            </li>
            
            <li className='product'>
                <img src={dbms} />
               <div className='description'>Data Base Managment Complete</div>
                <strong><h5>20 DAI</h5></strong>
                <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[1])} >
                    Buy
                </button>
            </li>

            <li className='product'>
                <img src={AI} />
               <div className='description'>Head-Start Artificial Inteligence </div>
                <strong><h5>5 DAI</h5></strong>
                <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[2])} >
                    Buy
                </button>
            </li>

        </ul>
<ul className='flexbox'>
            
<li className='product'>
    <img src={appdev} />
   <div className='description'>Complete App Devlopment </div>
    <strong><h5>50 DAI</h5></strong>
    <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[3])} >
        Buy
    </button>
</li>

<li className='product'>
    <img src={ML} />
   <div className='description'>Basics Of Machine Learning</div>
    <strong><h5>20 DAI</h5></strong>
    <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[4])} >
        Buy
    </button>
</li>

<li className='product'>
    <img src={comp} />
   <div className='description'>Principles Of Compiler Design</div>
    <strong><h5>5 DAI</h5></strong>
    <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[5])} >
        Buy
    </button>
</li>

</ul>
</div>
)
}

export default Store;