import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  id: number;
  title: string;
  price: number;
  brand: string;
  image: string;
  logo: string;
}

export interface MarketState {
  guitars: Item[];
  drums: Item[];
  acoustic: Item[];
}

const initialState: MarketState = {
    guitars: [
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
    drums: [
        {
          id: 1,
          title: 'Yamaha Stage Custom Birch',
          price: 900,
          brand: 'Yamaha',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Yamaha_Stage_Custom_Birch.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Yamaha_logo.svg'
        },
        {
          id: 2,
          title: 'Pearl Export EXX',
          price: 800,
          brand: 'Pearl',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Pearl_Export_EXX.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Pearl_Drums_logo.svg'
        },
        {
          id: 3,
          title: 'Tama Imperialstar',
          price: 750,
          brand: 'Tama',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Tama_Imperialstar.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Tama_logo.svg'
        },
        {
          id: 4,
          title: 'DW Collector’s Series',
          price: 3500,
          brand: 'DW',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/DW_Collectors_Series.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/DW_Drums_logo.svg'
        },
        {
          id: 5,
          title: 'Mapex Armory',
          price: 950,
          brand: 'Mapex',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mapex_Armory.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mapex_logo.svg'
        },
        {
          id: 6,
          title: 'Sonor SQ2',
          price: 4200,
          brand: 'Sonor',
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Sonor_SQ2.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Sonor_logo.svg'
        },
        {
          id: 7,
          title: 'Gretsch Renown Maple',
          price: 1600,
          brand: 'Gretsch',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Gretsch_Renown_Maple.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Gretsch_logo.svg'
        },
        {
          id: 8,
          title: 'Ludwig Classic Maple',
          price: 2500,
          brand: 'Ludwig',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ludwig_Classic_Maple.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Ludwig_logo.svg'
        },
        {
          id: 9,
          title: 'PDP Concept Maple',
          price: 1100,
          brand: 'PDP',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/PDP_Concept_Maple.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/PDP_logo.svg'
        },
        {
          id: 10,
          title: 'Roland V-Drums TD-27KV',
          price: 3500,
          brand: 'Roland',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Roland_V-Drums_TD-27KV.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Roland_logo.svg'
        }
      ]
      ,
      acoustic: [
        {
          id: 1,
          title: 'Taylor 214ce',
          price: 1100,
          brand: 'Taylor',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Taylor_214ce.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Taylor_Guitars_logo.svg'
        },
        {
          id: 2,
          title: 'Martin D-28',
          price: 3000,
          brand: 'Martin',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Martin_D-28.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Martin_Guitar_logo.svg'
        },
        {
          id: 3,
          title: 'Yamaha FG800',
          price: 220,
          brand: 'Yamaha',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Yamaha_FG800.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Yamaha_logo.svg'
        },
        {
          id: 4,
          title: 'Gibson J-45',
          price: 2700,
          brand: 'Gibson',
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Gibson_J-45.jpg',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
        },
        {
          id: 5,
          title: 'Fender CD-60S',
          price: 200,
          brand: 'Fender',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Fender_CD-60S.jpg',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
        },
        {
          id: 6,
          title: 'Guild D-55',
          price: 3500,
          brand: 'Guild',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Guild_D-55.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Guild_Guitars_logo.svg'
        },
        {
          id: 7,
          title: 'Seagull S6 Original',
          price: 500,
          brand: 'Seagull',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Seagull_S6_Original.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Seagull_logo.svg'
        },
        {
          id: 8,
          title: 'Takamine GD93',
          price: 900,
          brand: 'Takamine',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Takamine_GD93.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Takamine_logo.svg'
        },
        {
          id: 9,
          title: 'Ibanez AW54CE',
          price: 350,
          brand: 'Ibanez',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Ibanez_AW54CE.jpg',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zi-tfuY0JKGffWyH6Z6Npg_U-ETuksKN6Q&s'
        },
        {
          id: 10,
          title: 'Epiphone Hummingbird',
          price: 400,
          brand: 'Epiphone',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Epiphone_Hummingbird.jpg',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Epiphone_logo.svg'
        }
      ]
      
  };

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ category: keyof MarketState; item: Item }>
    ) => {
      state[action.payload.category].push(action.payload.item);
    },
    removeItem: (
      state,
      action: PayloadAction<{ category: keyof MarketState; id: number }>
    ) => {
      state[action.payload.category] = state[action.payload.category].filter(
        (item) => item.id !== action.payload.id
      );
    }
  }
});

export const { addItem, removeItem } = marketSlice.actions;
export default marketSlice.reducer;
