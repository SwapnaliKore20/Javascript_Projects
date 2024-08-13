const imageContainer=document.querySelector(".image-container");
const loadMoreImagesBtn=document.querySelector(".load-more-images-btn");

let count=1;

function fetchRandomImages(getCount){
    for(let i=getCount;i<=getCount+4; i++){
        imgElement=document.createElement("img");
        imgElement.src=`https://picsum.photos/300?random=${i}`
        imageContainer.appendChild(imgElement);
    }
    }

fetchRandomImages(count);

loadMoreImagesBtn.addEventListener("click",()=>{
    fetchRandomImages((count+=5));
})
