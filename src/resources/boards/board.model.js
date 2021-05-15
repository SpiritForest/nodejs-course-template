const { v4: uuidv4 } = require('uuid');

class Border {
  constructor({
    id = uuidv4(),
    title = 'title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Border;
