import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GuitarsState {
  items: Guitar[];
}

export interface Guitar {
    id: number;
    title: string;
    price: number;
    brand: string;
    image: string;
    logo: string; 
  }
  
  const initialState: GuitarsState = {
    items: [
      {
        id: 1,
        title: 'Fender Stratocaster',
        price: 1200,
        brand: 'Fender',
        image: 'https://heritageguitars.com/cdn/shop/products/products_2FHRT-010106103_2FHRT-010106103_1680170171650_dbd02f8f-c6c1-4641-8a72-269fec591232.jpg?v=1711933572&width=2048',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
      },
      {
        id: 2,
        title: 'Gibson Les Paul',
        price: 2500,
        brand: 'Gibson',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8ciU-U7kPLypcCM-Z15llzXB0Qd2KYC5aw&s',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
      },
      {
        id: 3,
        title: 'Ibanez RG',
        price: 900,
        brand: 'Ibanez',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHePb3hCWUrGe882lKzhR4IjiIO9kCPEm1w&s',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
      },
    ],
  };
  

const guitarsSlice = createSlice({
  name: 'guitars',
  initialState,
  reducers: {
    addGuitar: (state, action: PayloadAction<Guitar>) => {
      state.items.push(action.payload);
    },
    removeGuitar: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(guitar => guitar.id !== action.payload);
    },
  },
});

export const { addGuitar, removeGuitar } = guitarsSlice.actions;
export default guitarsSlice.reducer;
