import {useEffect, useState} from 'react'
import axios from "axios";
import Card from './Card';
import './photo.css';
function Photo() {
    const [images,setimages]=useState({
        loding:true,
        offset:0,
        limits:20,
        url:'',
        myphoto:[],
    });
    

    async function fetchData() {
        const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${images.offset}&limit=${images.limits}`;
    
        try {
            const response = await axios.get(url);
            setimages({
                ...images,
                myphoto: response.data.photos,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            setimages({
                ...images,
                loading: false,
            });
        }
    }
    
    function previmg() {
        const Newoffset=images.offset-20;
        const Newlimits=images.limits-20;
        setimages({
            ...images,
            offset:Newoffset,
            limits:Newlimits,
            loding:true,
            url:`https://api.slingacademy.com/v1/sample-data/photos?offset=${images.offset}&limit=${images.limits}`,
        });
    
   
        
    }
    function nextimg() {
        const Newoffset=images.offset+20;
        const Newlimits=images.limits+20;
        setimages({
            ...images,
            offset:Newoffset,
            limits:Newlimits,
            loding:true,
            url:`https://api.slingacademy.com/v1/sample-data/photos?offset=${Newoffset}&limit=${Newlimits}`,
        });
    

    }
    useEffect(()=>{
        console.log('useEffect triggered');
        fetchData();
       setimages((d)=>({
        ...d,
        loding:false,
        
       }))
       
    },[images.url])
    return (
        <div className='allDisplay'>
            <div className='photos'>
                {images.myphoto?.map((n) => (
                    <Card key={n.id} img={n.url} id={n.id} description={n.description} />
                ))}
            </div>
            <div className='btn'>
                <button onClick={previmg} className='prevBtn'>
                    Prev
                </button>
                <button onClick={nextimg} className='nextBtn'>
                    Next
                </button>
            </div>
            {images.loading ? <p className='loading'>Loading</p> : null}
        </div>
    );
}

export default Photo;