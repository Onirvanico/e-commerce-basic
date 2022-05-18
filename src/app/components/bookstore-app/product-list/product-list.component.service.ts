import { Injectable } from '@angular/core';
import { Book } from './model/Book';

@Injectable({
    providedIn: "root"
})
export class ProductListComponentService {

    books: Array<Book>;

    constructor() {
        this.books = this.createBooks();
    }

    getBooks(): Array<Book> {
        return this.books;
    }

    createBooks(): Array<Book> {
        let books = new Array<Book>();

        books.push({id: "1",
        name: "El loko",
        price: 100,
        quantity: 5,
        category: "Fantasia",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxVjuAq-U92zIzDJUanlvkaQK0A_Rz9VgBpzvOXWTyiDt9AS_qujQeimwzflmja32V6A8HhST5Anl-pje6hYsMXRjTqK7r-P7Ex9POIA-Fc8RatTw3GsR0Tw&usqp=CAc" });

        books.push({id: "2",
        name: "El Toro",
        price: 75.49,
        quantity: 15,
        category: "Aventura",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtAY4IkkZZ2iBDQYC_bI-Nk_J_7KJA4py6uBnc5kGy2LHVzurriBr_8Co7Qa0f0ExHJ0pTHqnlpiU&usqp=CAc" });

        books.push({id: "3",
        name: "Los polos Hermanos",
        price: 189.90,
        quantity: 35,
        category: "Drama",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRa2TBOhWbcN5I2SBDEmkd21wDUeM7-4rzSIHlv1qBAC62dh9AicUU-VyMXZjJnG8dyvgqhQrVLgq9NUI6esl2W_9ihew8HgKAU7mrdZ4DnQKlHtu_CABqQ&usqp=CAc" });

        books.push({id: "4",
        name: "A vida é loka",
        price: 450.00,
        quantity: 10,
        category: "Ação",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtAY4IkkZZ2iBDQYC_bI-Nk_J_7KJA4py6uBnc5kGy2LHVzurriBr_8Co7Qa0f0ExHJ0pTHqnlpiU&usqp=CAc" });

        books.push({id: "5",
        name: "Melhores dias virão",
        price: 65.29,
        quantity: 15,
        category: "Inspiradores",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7y86c79DzbwJknFdFoFQzNZj1Yqyaw2ckvEca5vpTgXq0D8VwEQ2J9K7g5kPoXDPmnlMK_HgSGqn9K6_HUCU0AumGv7wU-V0kN4nRV52V&usqp=CAc" });

        return books;
        
    }
}