import axios from 'axios';
import React,{ useEffect, useState } from 'react';


const Covid = () => {

    const [api,setApi] =useState([]);
    useEffect(() =>{

        const getCovid = async()=>{
            const x = await axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces")
            setApi(x.data)
        }
        getCovid()

    },[])
    console.log("ข้อมูล",api);

    return (
        <div>
            
            {/* province = {api.province} */}
            {api.map((c)=>(
                <div>
                        province = {c.province}, newcas={c.new_case}
                </div> 
                
            ))}
            
        </div>
    );
}

export default Covid;

// new_case: 66
// new_case_excludeabroad: 66
// new_death: 0
// province: "กระบี่"
// total_case: 1750
// total_case_excludeabroad: 1743
// total_death: 3
// txn_date: "2021-09-04"
// update_date: "2021-09-04 07:40:02"
