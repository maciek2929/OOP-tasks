import { v4 as uuidv4 } from "uuid";
//@ToDo add functionality search contact for phrase//

class Group {
  constructor(groupName) {
    this.id = uuidv4();
    this.groupName = groupName;
    this.contactsList = [];
  }
  setGroupName(newGroupName) {
    this.groupName = newGroupName;
  }
  checkThatExist(name) {
    const filteredArr = this.contactsList.filter(
      (contact) => contact.name === name
    );
    if (filteredArr.length !== 0) return true;
  }

  removeContactFromList(nameToRemove) {
    this.contactsList = this.contactsList.filter(
      (contact) => contact.name !== nameToRemove
    );
  }

  addContacts(...contactsToAdd) {
    contactsToAdd.forEach((contact) => {
      if (!this.checkThatExist(contact.name)) {
        this.contactsList.push(contact);
      } else {
        console.log("contact is existing on your list we can not modify it");
      }
    });
  }
}

export default Group;
