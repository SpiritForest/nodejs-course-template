import { IColumn } from "../../types/column/column";

const {
  v4: uuidv4
} = require('uuid');

class Column implements IColumn {
  id: string ;
  order: number;
  title: string;
  constructor({
    id = uuidv4(),
    order = 0,
    title = 'title',
  } = {}) {
    this.id = id;
    this.order = order;
    this.title = title;
  }
}

module.exports = Column;