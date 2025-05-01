import "./styles.css";
import "./header-styles.css";
import {addContent} from "./home";
import {addMenu} from './menu'
import { addAbout } from "./about";
import { addContacts } from "./contacts";
import { clearContent } from "./clear";
addContent()
addMenu()
addAbout()
addContacts()
console.log('it`s alive!')