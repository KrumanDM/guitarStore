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
          {
            id: 4,
            title: 'PRS Custom 24',
            price: 3200,
            brand: 'PRS',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/PRS_Custom_24.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PRS_Guitars_logo.svg'
          },
          {
            id: 5,
            title: 'Yamaha Pacifica 112V',
            price: 450,
            brand: 'Yamaha',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Yamaha_Pacifica_112V.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Yamaha_logo.svg'
          },
          {
            id: 6,
            title: 'ESP LTD EC-1000',
            price: 1100,
            brand: 'ESP',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/ESP_LTD_EC-1000.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/ESP_Guitars_logo.svg'
          },
          {
            id: 7,
            title: 'Jackson Soloist SL1',
            price: 1500,
            brand: 'Jackson',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Jackson_Soloist_SL1.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Jackson_Guitars_logo.svg'
          },
          {
            id: 8,
            title: 'Schecter Hellraiser C-1',
            price: 950,
            brand: 'Schecter',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Schecter_Hellraiser_C-1.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Schecter_logo.svg'
          },
          {
            id: 9,
            title: 'Gretsch G5420T',
            price: 1400,
            brand: 'Gretsch',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Gretsch_G5420T.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Gretsch_logo.svg'
          },
          {
            id: 10,
            title: 'Charvel Pro-Mod San Dimas',
            price: 1200,
            brand: 'Charvel',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Charvel_San_Dimas.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Charvel_logo.svg'
          },
          {
            id: 11,
            title: 'Music Man Majesty',
            price: 3500,
            brand: 'Music Man',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Music_Man_Majesty.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Music_Man_logo.svg'
          },
          {
            id: 12,
            title: 'Rickenbacker 330',
            price: 2100,
            brand: 'Rickenbacker',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Rickenbacker_330.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Rickenbacker_logo.svg'
          },
          {
            id: 13,
            title: 'Fender Telecaster',
            price: 1300,
            brand: 'Fender',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Fender_Telecaster.jpg',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
          },
          {
            id: 14,
            title: 'Gibson SG Standard',
            price: 1600,
            brand: 'Gibson',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Gibson_SG_Standard.jpg',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
          },
          {
            id: 15,
            title: 'Ibanez JEM7V',
            price: 2800,
            brand: 'Ibanez',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ibanez_JEM7V.jpg',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
          },
          {
            id: 16,
            title: 'PRS Silver Sky',
            price: 2400,
            brand: 'PRS',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/PRS_Silver_Sky.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PRS_Guitars_logo.svg'
          },
          {
            id: 17,
            title: 'Yamaha Revstar',
            price: 800,
            brand: 'Yamaha',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Yamaha_Revstar.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Yamaha_logo.svg'
          },
          {
            id: 18,
            title: 'ESP Horizon',
            price: 2000,
            brand: 'ESP',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/ESP_Horizon.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/ESP_Guitars_logo.svg'
          },
          {
            id: 19,
            title: 'Jackson Dinky',
            price: 950,
            brand: 'Jackson',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Jackson_Dinky.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Jackson_Guitars_logo.svg'
          },
          {
            id: 20,
            title: 'Schecter C-7 Multiscale',
            price: 1100,
            brand: 'Schecter',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Schecter_C-7_Multiscale.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Schecter_logo.svg'
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
