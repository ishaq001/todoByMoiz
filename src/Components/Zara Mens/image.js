import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';




export default function Image() {
  return (
    <div className="scaled">
      <img src=" https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-08-2//w/1366/IMAGE-landscape-fill-24f2378d-dd57-49df-8962-1730b956e6e3-default_0.jpg?ts=1677239531402" />
      <img src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-shoes/subhome-xmedia-03//w/1366/IMAGE-landscape-fill-06a4de58-204b-4470-8f33-7e2295950393-default_0.jpg?ts=1674053798495" />
      <img src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-joinlife/subhome-xmedia-03//w/1366/IMAGE-landscape-fill-289e5fad-8dda-4413-a624-945f5eb3cc77-default_0.jpg?ts=1674064160089" />
      <img src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-05-2//w/1366/IMAGE-landscape-fill-80582c04-ed01-4852-a9cc-3f470b705c40-default_0.jpg?ts=1675249858443" />
    </div>

    // <ImageList sx={{ width: '200rem', height: '50rem' }}  >
    //   {itemData.map((item) => (
    //     <ImageListItem key={item.img}>
    //       <img
    //         src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
    //         srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 1x`}
    //         alt={item.title}

    //       />
    //     </ImageListItem>
    //   ))}

    // </ImageList>
  );
}

 
// const itemData = [
//    {
    
      
//      img: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-02//w/1366/IMAGE-portrait-ipad-fill-16dba5ae-fd82-4b7f-8d7c-82f3aa4f27df-default_0.jpg?ts=1673606439597' ,
 
//    },
//   //  {

//   //   img: ' https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-48//w/1366/IMAGE-landscape-fill-b24b0454-105d-41bd-80f4-604d93d15bb3-default_0.jpg?ts=1669655003956',
//   // },
//  ];