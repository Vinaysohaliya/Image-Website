import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Details.css'

function Details() {
    const [detail,setdetail]=useState({});
  const { id } = useParams();
console.log(id);
  useEffect(() => {
    async function fetchPhotoById() {
      try {
        await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`).then((res)=>{
            const photodata=res.data.photo;
            setdetail({
                description:photodata.description,
                title:photodata.title,
                url:photodata.url,
            })
        })
        
        console.log(detail);
      } catch (error) {
        console.error("Error fetching photo details:", error);
      }
    }

    fetchPhotoById();
  }, [id]);

  return (
   
     <div className="details">
      <img src={detail.url} alt="text"></img>
      <div className="info">
       <p className="title">{detail.title}</p>
       <p className="description">{detail.description}</p>
      </div>
    </div>
  
  );
}

export default Details;
