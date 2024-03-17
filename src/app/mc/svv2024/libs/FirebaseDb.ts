// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { Form } from "../interfaces/form";
import { duplicatedColor, duplicatedPrefix, duplicatedUsername } from "./ErrorMsg";

import colors from "../data/colors.json";
import { Color } from "./Color";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FORM_COLLECTION = "forms"
const LOG_COLLECTION = "logs"

export async function getForm() {
  return (await getDocs(collection(db, FORM_COLLECTION))).docs.map(doc => doc.data() as Form);
}

export async function getSelecteds() {
  const form = await getForm();
  const selectedColorsStrArr = form.map(form => form.color).sort().filter((value, index, array) => array.indexOf(value) === index);
  const selectedColors: Color[] = [];

  selectedColorsStrArr.forEach(selectedColorStr => {
    const color = colors.find(color => {
      return color.codeName === selectedColorStr;
    });

    if (color) {
      selectedColors.push(color);
    }
  });

  const selectedPrefixes = form.map(
    form => form.prefix
  ).sort().filter((value, index, array) => array.indexOf(value) === index);

  return {
    selectedColors: selectedColors,
    selectedPrefixes: selectedPrefixes
  };
}

export async function saveForm(newForm: Form, force?: boolean) {
  const duplicated = {
    username: false,
    color: false
  }

  const forms = await getForm();

  if (forms.filter(form => {
    return form.username === newForm.username
  }).length !== 0) {
    duplicated.username = true;
  }

  if (forms.filter(form => {
    return form.prefix === newForm.prefix;
  }).length !== 0) {
    throw new Error(duplicatedPrefix);
  }

  if (forms.filter(form => {
    return form.color === newForm.color
  }).length !== 0) {
    duplicated.color = true;
  }

  if (!force) {
    if (duplicated.username) {
      throw new Error(duplicatedUsername);
    } else if (duplicated.color) {
      throw new Error(duplicatedColor);
    }
  }

  await setDoc(doc(db, FORM_COLLECTION, newForm.username), newForm);
  await setDoc(doc(db, LOG_COLLECTION, newForm.updateTime + "_" + newForm.username), newForm);
  return true;
}
