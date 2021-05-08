// Stwórz strukturę danych związaną z biblioteką
import {v4 as uuidv4 } from 'uuid'

// Obiekt charakteryzujący pojedyńczy kontakt:
class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
  constructor(name,surname,email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.createdData = new Date()
    this.id = uuidv4()
  }
  setCreatedData(){
    this.createdData = new Date()
  }
  setChosenProperty(chosenProperty,newValue){
    if(!['name','surname','email'].includes(chosenProperty)){
      throw  new Error(`${chosenProperty} is wrong value to set, please type corect property`)
    }
    this[chosenProperty] = newValue   // czemu to dziala poprzez odniesienie do tablicy natomiast przez znak rownosci juz  nie

  }
}




// Obiekt charakteryzujący grupę kontaktów:
//@ToDo  when we caught Error app is crashed, try To fix this, mayby try,catch
//ToDo change filter procedure, use UUID  behind the  scenes but from user use Name
class Group {
  constructor(groupName) {
    this.id = uuidv4()
    this.groupName = groupName;
    this.contactsList = []

  }
  setGroupName(newGroupName){
    this.groupName = newGroupName
  }

  removeContactFromList(nameToRemove){
    this.contactsList = this.contactsList.filter((contact) => contact.name !== nameToRemove)

  }
  c

  addContacts(...contactsToAdd){
    contactsToAdd.forEach(contact=> {
      this.contactsList.push(contact)
    })

  }
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
}

export  {Contact,Group}


// Obiekt charakteryzujący książke adresową
class AddressBook {
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}


