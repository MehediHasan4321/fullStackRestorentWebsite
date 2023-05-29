import { useEffect, useState } from "react"

const useMenu = ()=>{
    const [menus,setMenu] = useState([])
    useEffect(()=>{
        fetch('menus.json')
        .then(res=>res.json())
        .then(data=>{
            setMenu(data)
        })
    },[])

    return [menus]
}

export default useMenu