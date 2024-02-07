
import smartwatch from '../../Images/smartwatch.png';
import facecap from '../../Images/facecap.png';
import controller from '../../Images/controller.png';
import sneakers from '../../Images/Red sneakers.png'
import curology from '../../Images/curology.png';
import headPhone from '../../Images/headphone.png';
import smartphone from '../../Images/smartphone.png';
import airpods from '../../Images/earphones.png';
import bluesneakers from '../../Images/bluesneakers.png';
import item1 from '../../Images/Item1.png'

const cardItems = [
    {productName:'Apple Watch, APX5', src:smartwatch , info:'Long lasting battery', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: false, group: "A", id: 1},

    {productName:'Sony Headset, EPX5', src: headPhone , info:'HD sound', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "B", id: 2},

    {productName:'Curology, full set', src:curology , info:'soft and clean', 
    price:'15,00.90', formerPrice:'20,000.90', bestPrice: true, group: "C", id: 3},

    {productName:'Red Sneakers, Flexible', src:sneakers , info:'HD sound', 
    price:'10,000.90', formerPrice:'20,000.90', style:{backgroundColor:'none'},
    imgStyle:{backgroundColor:"none", width:"100%", bestPrice: true, group: "C", id: 4}
    },

    {productName:'Yo Face Cap', src:facecap , info:'Long lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: false, group: "A", id: 5},

    {productName:'Smartphone', src:smartphone, info:'Long lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "B", id: 6},

    {productName:'Yo Game Pad, Fullset', src:controller, info:'Soft and clean', 
    price:'15,000.90', formerPrice:'20,000.90', bestPrice: true, group: "A", id: 7}, 

    {
      productName: 'Yo airpods, flixable', src:airpods, info:'Long Lasting', 
    price:'15,000.90', formerPrice:'20,000.90',bestPrice: true, group: "B", id: 8
    },

    {productName:'Blue Sneakers, Flexible', src:bluesneakers , info:'Long Lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "A", id: 9
    },

    {productName:'The Sneakers, Flexible', src:item1 , info:'Long Lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "B", id: 10
    },

    {
      productName: 'Airpods, flixable', src:airpods, info:'Long Lasting', 
    price:'15,000.90', formerPrice:'20,000.90',bestPrice: true, group: "C",id: 11
    },

]

export default cardItems;
