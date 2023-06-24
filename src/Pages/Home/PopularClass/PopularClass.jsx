import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassItem from "./ClassItem";




const PopularClass = () => {
    const [classes,setClasses]=useState([])

    useEffect(()=>{
        fetch('/popular.json')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
        })
    },[])
    return (
        <div className="mx-auto">
            <SectionTitle title={'Our popular classes'} heading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure."}></SectionTitle>
           
           <div className="grid grid-cols-3 gap-10 mt-10">
                {classes.map((classItem) => (<ClassItem key={classItem.enrollmentCount} classItem={classItem}></ClassItem>))}
           </div>
        </div>
    );
};

export default PopularClass;