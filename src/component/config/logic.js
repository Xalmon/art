export const isPresentInFavorites=(favorites,artStudio)=>{
    for(let item of favorites){
        if(artStudio.id === item.id){
            return true
        }
    }
    return false;
}