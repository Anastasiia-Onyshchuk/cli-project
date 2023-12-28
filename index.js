import * as contactsService from "./contacts.js";
import { program } from "commander";
// import yargs from "yargs";

const invokeAction = async ({ action, id, ...data}) => {
    switch (action) {
        case "list":
            const allContacts = await contactsService.listContacts();
            return console.log(allContacts);
        case "getById":
            const oneContact = await contactsService.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactsService.addContact(data);
            return console.log(newContact);
        case "updateById":
            const updateContacts = await contactsService.updateCotactById(id, data);
            return console.log(updateContacts);
        case "remove":
            const removeContact = await contactsService.removeContact(id);
            return console.log(removeContact);
            default:
      console.warn('\x1B[31m Unknown action type!');
    }
}

// const {argv} = yargs(process.argv.slice(2));
// invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "05olLMgyVQdWRwgKfg5J6" });
// invokeAction({ action: "add", name:"Mango", email:"mango@gmail.com", phone:"322-22-22" });
// invokeAction({ action: "updateById", id: "AeHIrLTr6JkxGE6SN-0Rw", phone: "098-543-21-78" });
// invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>")

program.parse();

const options = program.opts();
invokeAction(options);


