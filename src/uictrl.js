import ItemController from './itemctrl';
class UIController{
    constructor(){
        this.selectors = {
            name : '#meal',
            calories : '#calories',
            addBtn : '#add',
            editBtn : '#edit',
            deleteBtn : '#delete',
            clearAll : '.clear-btn',
            backBtn : '#back',
            listItem : '#meal-list',
            listItems : '#meal-list li',
            total : '#calori',
            cardTitle : ".card-title",
            heading : "#heading",
            EditPen : "#edit-pen"
        }

        let items = ItemController.getItems()
        this.showdataItems(items)
    }


    getItemInput(){
        return{
         name : document.querySelector(this.selectors.name).value,
         calories : document.querySelector(this.selectors.calories).value
        }
    }

    showdataItems(items){
        let html = "";
        items.forEach(item => {
            html += `
            <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}</strong>
            <span class="new badge ${item.calories > 900 ? 'red' : 'green' }" data-badge-caption="${item.calories}calories" style="float: none;"></span>
            <a href="#" class="right green-text edit-pen" >
                <i class="fas fa-pencil-alt"></i>
            </a>
        </li>
            `
         
            
        });
        document.querySelector(this.selectors.listItem).innerHTML = html
    }
    showTotlaCalori(total){
        document.querySelector(this.selectors.total).textContent = total
    }
    clearInput(){
        document.querySelector(this.selectors.name).value = "";
        document.querySelector(this.selectors.calories).value = "";
    }
    hideButton(){
        document.querySelector(this.selectors.editBtn).style.display = 'none';
        document.querySelector(this.selectors.deleteBtn).style.display = 'none';
        document.querySelector(this.selectors.backBtn).style.display = 'none';
        document.querySelector(this.selectors.addBtn).style.display = 'inline'
    }
  
    showButton(){
        document.querySelector(this.selectors.editBtn).style.display = 'inline';
        document.querySelector(this.selectors.deleteBtn).style.display = 'inline';
        document.querySelector(this.selectors.backBtn).style.display = 'inline';
        document.querySelector(this.selectors.addBtn).style.display = 'none'
    }
     inputValue(item){
        document.querySelector(this.selectors.name).value = item.name ;
        document.querySelector(this.selectors.calories).value = item.calories;
     }
     updateItem(items){
         
        let itemList = document.querySelectorAll(this.selectors.listItems);
        let listsArr = Array.from(itemList);
        
        listsArr.forEach(item =>{
            if(item.id === `item-${items.id}`){
            document.querySelector(`#${item.id}`).innerHTML = `
        
            <strong>${items.name}</strong>
            <span class="new badge ${items.calories > 900 ? 'red' : 'green' }" data-badge-caption="${items.calories}calories" style="float: none;"></span>
            <a href="#" class="right green-text edit-pen" >
                <i class="fas fa-pencil-alt"></i>
            </a>
        
            
            `

            }
        })

     }

  static deletItem(id){
      let itemID = `#item-${id}`;
      let listItem = document.querySelector(itemID);
      listItem.remove()
  }

  clearAll(){
      const listItem = document.querySelectorAll(this.selectors.listItems);
      const ListArr = Array.from(listItem);
      ListArr.forEach(item =>{
          item.remove()
      })
  }
   
}


export default UIController;