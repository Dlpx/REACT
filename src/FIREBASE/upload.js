import { db } from './Config.js';
import { collection, addDoc } from 'firebase/firestore';
import STOCK from '../DATA/STOCK.json' assert { type: "json" };


STOCK.forEach((item) => delete item.id)

const refProductos = collection(db, 'productos')

STOCK.forEach(item => {
    addDoc(refProductos, item)
})