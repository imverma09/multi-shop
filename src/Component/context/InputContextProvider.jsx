import { createContext, useState } from "react";
export const inputContext = createContext()

const InputContextProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState("")
    const [wishlistArr, setWishlistArr] = useState([])
    const [colorArray, setColorArray] = useState([])
    const [priceArray, setPriceArray] = useState([])
    const [detailArr , setDetailArr] = useState([ {
        "id":30,
        "category":"shoes",
        "brands" : "skechers",
        "img": "/images/product-4.jpg",
        "price" : 1200
    }])

    const [bgColorArr, setBgColorArr] = useState(new Array(20).fill('white'))
    return (
        <inputContext.Provider value={{ inputValue, setInputValue, setWishlistArr, wishlistArr, colorArray, setColorArray, priceArray, setPriceArray ,detailArr ,setDetailArr,bgColorArr ,setBgColorArr }}>
            {children}
        </inputContext.Provider>
    )
}
export default InputContextProvider