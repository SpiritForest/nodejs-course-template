const repo = require('./board.memory.repository');

const getAll = () => repo.getAll();

const getDataIndexById = (id) => getAll().findIndex(data => data.id === id);

const getById = (id) => getAll().find(data => data.id === id);

const addData = (data) => repo.addData(data);

const putData = (id, data) => {
  const index = getDataIndexById(id);
  
  if (index !== -1) {
    repo.replaceData(index, data);
  }
  
  return data;
};

const deleteData = (id) => {
  const index = getDataIndexById(id);

  if (index !== -1) {
    repo.deleteByIndex(index);
  }

  return index;
};

module.exports = {
  getAll,
  getById,
  addData,
  putData,
  deleteData,
};