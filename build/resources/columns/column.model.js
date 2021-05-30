"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
class Column {
    constructor({ id = uuidv4(), order = 0, title = 'title', } = {}) {
        this.id = id;
        this.order = order;
        this.title = title;
    }
}
module.exports = Column;
