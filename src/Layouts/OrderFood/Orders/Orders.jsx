import React, { useEffect, useState } from 'react';
import SectionBanner from '../../ShareCompo/SectionBanner/SectionBanner';
import orderBanner from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';
import useMenu from '../../../Hooks/useMenu';
import { useParams } from 'react-router-dom';
import useAexiosSerure from '../../../Hooks/useAexiosSerure';

const Orders = () => {
    const orderBannerInfo = {
        title : 'OUR SHOP',
        description:'Would you like to try a dish?',
        img:orderBanner
    }
    const category = ['pizza','salad',"dessert","soup","drinks"]
    const {foodCategory} = useParams()
    const initialIndex = category.indexOf(foodCategory)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menus,setMenu] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/menu').then(res=>res.json()).then(data=>setMenu(data))
    },[])
    
    const drinks = menus.filter(item => item.category === 'drinks')
    const desert = menus.filter(item => item.category === 'dessert')
    const pizza = menus.filter(item => item.category === 'pizza')
    const salad = menus.filter(item => item.category === 'salad')
    const soups = menus.filter(item => item.category === 'soup')
    return (
        <>
        <SectionBanner info={orderBannerInfo}/>
        <div className='container mx-auto my-24'>
        <Tabs defaultIndex={tabIndex} onSelect={index=>setTabIndex(index)}>
            <TabList>
                {
                    category.map(cata=><Tab key={cata}><span className='uppercase'>{cata}</span></Tab>)
                }
            </TabList>
            <TabPanel>
                <OrderTab items={pizza}/>
            </TabPanel>
            <TabPanel>
                <OrderTab items={salad}/>
            </TabPanel>
            <TabPanel>
                <OrderTab items={desert}/>
            </TabPanel>
            <TabPanel>
                <OrderTab items={soups}/>
            </TabPanel>
            <TabPanel>
                <OrderTab items={drinks}/>
            </TabPanel>
        </Tabs>
        </div>
        </>
    );
};

export default Orders;