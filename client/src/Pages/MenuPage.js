import React from 'react'
import MenuHeader from '../Components/MenuHeader'
import MenuNav from '../Components/MenuNav'
import Searchbar from '../Components/Searchbar'
import Category from '../Components/Category'
import Foot from './Foot'

const MenuPage = () => {
  return (
    <div>
      <MenuHeader/>
      <MenuNav/>
      <Searchbar/>
      <Category/>
      <Foot/>

    </div>
  )
}

export default MenuPage