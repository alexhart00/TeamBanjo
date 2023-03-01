import ItemCarousel from "../Shared/Carousel.client";


export default function ManualPage({clothingData, showComponent}){

    const topImages= [
    "https://img1.shopcider.com/product/1654572280000-bf8G63.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_80/interlace,1", 
    "https://img1.shopcider.com/product/1652527482000-6YE8Dr.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_80/interlace,1",
    "https://img1.shopcider.com/product/1666064255000-Z3YXaD.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_80/interlace,1"
    ];

    const bottomImages = [
    "https://img1.shopcider.com/product/1666062089000-Ffr8Tm.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_80/interlace,1",
    "https://img1.shopcider.com/product/1670349085000-4eaHSB.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_80/interlace,1",
    "https://img1.shopcider.com/product/1664874940000-8Kjc6J.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_80/interlace,1"
    ];

    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    if(showComponent == true){
        return(
            <div>
                 <p>Manual Page</p>
                 <ItemCarousel imgUrls={topImages}></ItemCarousel>
                 <ItemCarousel imgUrls={bottomImages}></ItemCarousel>
            </div>
            
        );
    }
    else{
        return(
            <div></div>
        );
    }
}