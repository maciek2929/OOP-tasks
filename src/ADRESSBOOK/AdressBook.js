import Contact from "./Contact";
import ContactsGroup from "./ContactsGroup";
import Validator from "./Validator";
//@ToDo display contact with properly format //

class AdressBook {
  constructor() {
    this.allContactList = [];
    this.allGroups = [];
  }

  addContact(...arrayOfContact) {
    arrayOfContact.forEach((contact) => {
      if (Validator.isProperlyCreatedElement(contact, Contact)) {
        console.log("contact added");
        this.allContactList.push(contact);
      } else {
        console.log("This is not authorized contact try it again ");
      }
    });
  }
  removeSingleContact(contactToRemove) {
    this.allContactList = this.allContactList.filter((contact) => {
      console.log("contact removed");
      return contact.name === !contactToRemove;
    });
  }
  modifyContact(editedContactName, newValues) {
    this.allContactList.map((contact) => {
      if (contact.name === editedContactName) {
        contact.name = newValues.name;
        contact.surname = newValues.surname;
        contact.email = newValues.email;
      }
    });
  }
  // Contact GROUPS !!!!!!!!
  addGroupOfContacts(...namesOfGrup) {
    namesOfGrup.forEach((group) => {
      if (this.isProperlyCreatedElement(group, ContactsGroup)) {
        this.allGroups.push(group);
        console.log("Group added :)");
      } else {
        console.log("adding group is failed");
      }
    });
  }
  removeGroup(groupToRemove) {
    this.allContactList = this.allContactList.filter((group) => {
      group.name === !groupToRemove;
      console.log("contact removed");
    });
  }
  searchContactPhrase(phrase) {
    this.allContactList.filter((contact) => {
      return contact.name.toLowerCase().includes(phrase.toLowerCase());
    });
  }
}

export default AdressBook;
