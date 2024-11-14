import React, { useEffect } from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
function EmailVerification() {
   const data = useLocation()
   const obj = new URLSearchParams(data.search)
   const token =  obj.get('token');
   const navigate  =  useNavigate(); 
   useEffect(()=>{
    const fn = async()=>{
        try {
           const res = await fetch("http://localhost:4000/email-verification?token="+token)
           res.ok ? navigate('/') : navigate('/sign')
        } 
        catch (error) {
            console.log(error.messages);
            navigate('/sign');            
        }
       }
       fn()
   },[])
  return (
    <div>
      <h1>EmailVerification</h1>
    </div>
  )
}

export default EmailVerification
