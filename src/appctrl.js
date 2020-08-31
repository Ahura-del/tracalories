import ItemController from "./itemctrl";
import UIController from "./uictrl";
import Storage from "./storagectrl";
let UI = new UIController();

class AppController {
  constructor() {
    UI.hideButton();
    this.LoadEvent();
    new UIController();
    let total = ItemController.totlaCalories();
    UI.showTotlaCalori(total);
  }

  LoadEvent() {
    let idgenerator = ItemController.GenerateID();

    document
      .querySelector(UI.selectors.addBtn)
      .addEventListener("click", (e) => {
        e.preventDefault();
        let input = UI.getItemInput();
        let id = idgenerator.next().value;

        if (input.name !== "" && input.calories !== "") {
          let item = new ItemController(id, input.name, input.calories);
          ItemController.addItem(item);
          let items = ItemController.getItems();
          new UIController().showdataItems(items);
          let total = ItemController.totlaCalories();
          UI.showTotlaCalori(total);
          Storage.storeInStorage(item);

          UI.clearInput();
        } else {
          alert("please fill all field");
        }
      });

    document.querySelector("#meal-list").addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("fa-pencil-alt")) {
        const ListId = e.target.parentNode.parentNode.id;
        const listArr = ListId.split("-");
        const id = parseInt(listArr[1]);

        let ItemtoEdit = ItemController.inputItems(id);
        ItemController.setCurrentItem(ItemtoEdit);
        UI.showButton();
        UI.inputValue(ItemController.getcurrentItem());
      }
    });

    document
      .querySelector(UI.selectors.editBtn)
      .addEventListener("click", (e) => {
        e.preventDefault();
        let input = UI.getItemInput();
        let updaeItem = ItemController.updateMeal(input.name, input.calories);

        UI.updateItem(updaeItem);

        UI.hideButton();
        let total = ItemController.totlaCalories();
        UI.showTotlaCalori(total);
        
        UI.clearInput();
        Storage.updateStorage(updaeItem)
      });

    document
      .querySelector(UI.selectors.backBtn)
      .addEventListener("click", (e) => {
        e.preventDefault();
        UI.hideButton();
        UI.clearInput();
      });

    document
      .querySelector(UI.selectors.deleteBtn)
      .addEventListener("click", (e) => {
        e.preventDefault();
        let id = ItemController.getcurrentItem().id;
        ItemController.deleteItem(id);
        UIController.deletItem(id);
        UI.hideButton();
        let total = ItemController.totlaCalories();
        UI.showTotlaCalori(total);
        UI.clearInput();
        Storage.deleteStorage(id)
      });

    document
      .querySelector(UI.selectors.clearAll)
      .addEventListener("click", (e) => {
        e.preventDefault();
        ItemController.clearAll();
        UI.clearAll();
        let total = ItemController.totlaCalories();
        UI.showTotlaCalori(total);
        UI.clearInput();
        Storage.clearAllStorage()
      });
  }
}

export default AppController;
