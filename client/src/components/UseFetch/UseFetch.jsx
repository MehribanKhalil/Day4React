import React,{useEffect} from 'react'

const UseFetch = (url,callback) => {

    useEffect(() => {
      
        try {
            fetch(url).then(res=>res.json()).then(data=>callback(data))
        } catch (error) {
            console.log(error);
        }
     
    }, [url,callback])
    

  return (
    <div>
      
    </div>
  )
}

export default UseFetch
