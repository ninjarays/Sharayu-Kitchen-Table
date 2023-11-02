import React from 'react'
import logo from '../img/logo.png'
import shoppingCart from '../img/shopping-cart-2--shopping-cart-checkout.png'


const MenuNav = () => {
  return (
    <div className='MenuNav'>
        <img src={logo} alt='logo' className='logo'/>
        <img src={shoppingCart} alt='shoppingCart' className='shoppingCart'/>

    </div>
  )
}

export default MenuNav