import Storage from './storagectrl'


const data = {
    items : Storage.getItemFromStore(),
    currentItem : null ,
    totlaCalorie :0 
}

class ItemController{
    constructor(id , name , calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }


    static *GenerateID(){
        let id = data.items.length > 0 ? data.items[data.items.length - 1].id : 0;

         while(true){
             id++ ;
             yield id;
             
         }
    }

    static addItem(item){
        data.items.push(item)
       
    }
    static getItems(){
        return data.items
    }

    static totlaCalories(){
        let totlal = 0;

        data.items.forEach(item =>{
            
            totlal +=  parseInt(item.calories)
        })
        data.totlaCalorie = totlal;
        return totlal;
    }

  static inputItems(id){
     let found = null;

     data.items.forEach(item =>{
         if(item.id === id){
             found = item;
         }
     })

     return found;

  }

  static setCurrentItem(item){
      data.currentItem = item
  }

  static getcurrentItem(){
      return data.currentItem;
  }

  static updateMeal(name , claorie){
      let found = null ;
    let calories = parseInt(claorie)
      data.items.forEach( item=>{

        if(item.id === data.currentItem.id){
            item.name = name;
            item.calories = calories;
            found = item
        }
      })
      return found; 
  }

static deleteItem(id){
    const ids =data.items.map(item =>{
        return item.id
    })
    
    let index = ids.indexOf(id);
   data.items.splice(index ,1)
   
}

static clearAll(){
    data.items = []
}
   
}

export default ItemController;