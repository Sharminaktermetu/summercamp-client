import  { useEffect, useState } from 'react';

const useClasses = () => {
    const [activities, setActivities] =useState([])
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/class')
        .then(res=>res.json())
        .then(data=>{
            setActivities(data)
           setLoading(false)
        })
    },[])

    return[activities, loading]
};

export default useClasses;