
class Storage{
    constructor(){}


    static storeInStorage(item){
        let items;
        if(localStorage.getItem('tra-items')===null){
            items = [];
            items.push(item)
            localStorage.setItem('tra-items' , JSON.stringify(items))
        }else{
            items = JSON.parse(localStorage.getItem('tra-items'))
            items.push(item);
            localStorage.setItem('tra-items' , JSON.stringify(items))
        }
    }

    static getItemFromStore(){
        let items;
        if(localStorage.getItem('tra-items')===null){
            items = []
            return items;
        }else{
            items = JSON.parse(localStorage.getItem('tra-items'));
            return items
        }
    }

    static updateStorage(updateitem){
        let items = JSON.parse(localStorage.getItem('tra-items'));
        items.forEach((item , index) => {
            if(item.id === updateitem.id){
                items.splice(index , 1 , updateitem)
            }
        });
        localStorage.setItem('tra-items' , JSON.stringify(items))
    }


    static deleteStorage(id){
        let items = JSON.parse(localStorage.getItem('tra-items'));
        items.forEach((item , index) => {
            if(item.id === id){
                items.splice(index , 1 )
            }
        });
        localStorage.setItem('tra-items' , JSON.stringify(items))
    }

    static clearAllStorage(){
        localStorage.removeItem('tra-items')
    }


}



export default Storage;