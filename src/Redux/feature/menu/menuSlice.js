import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{
    id: 1,
    title: "HOME",
    items: [
      'WHY CHOOSE US',
      'OUR SERVICES',
      'POPULAR PRODUCTS',
      'STATISTICS',
      'OUR TEAM',
    ]
  },
  {
    id: 2,
    title: "PAGES",
    items: [
      'ABOUT US',
      'WHAT WE OFFER',
      'OUR TEAM',
      'TESTIMONIALS',
    ]
  },
  {
    id: 3,
    title: "SHOP",
    items: [
      'OUR PRODUCTS',
      'WHEELS',
      'ENGINE',
      'CAR MIRROR',
      'ALL FILTERS'
    ]
  },
  {
    id: 4,
    title: "GALLERY",
    items: [
      'GRID GALLERY',
      'MASONRY GALLERY',
    ]
  },
  {
    id: 5,
    title: "CONTACT US",
    items: [
      'OUR LOCATION',
    ]
  }],
  activeItem: null
}




export const MenuSlice = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
})

export const { setActiveItem } = MenuSlice.actions

export default MenuSlice.reducer