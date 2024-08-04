import { createContext, useState } from "react";
import shoesData from '../Data/shoes.json'
import watchData from '../Data/watch.json'
import shirtData from '../Data/shirt.json'
import electronicsData from '../Data/electronics.json'
import dressesData from '../Data/dresses.json'
import cameraData from '../Data/camera.json'
// import shuffle from "";
import shuffle from '../helper/shuffleArr'
export const wishlistContext = createContext()

const WishlistContextProvider = ({ children }) => {
    const allData = [...shoesData, ...watchData, ...shirtData, ...cameraData, ...dressesData, ...electronicsData]
    const shuffleArr = shuffle(allData);
    const [maintain, setMaintain] = useState(new Array(allData.length).fill('white'))
    const [presentArr, setPresentArr] = useState(shuffleArr)
    // const swiperArr =[ ...cameraData ,...shoesData ,...shirtData]
    const [cardArr ,setCardArr]= useState([]);

    return (
        <wishlistContext.Provider value={{ maintain, setMaintain, presentArr, setPresentArr, allData ,shuffleArr ,cardArr , setCardArr }}>
            {children}
        </wishlistContext.Provider>
    )
}
export default WishlistContextProvider