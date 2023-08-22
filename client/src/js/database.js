import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id' });
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try{
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ value: content, id:1 });
    const result = await request;
    return result;
  } catch (error) {
  console.error('putDb not implemented');
  }
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try{
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);
    const result = await request;
    return result;
  }catch (error) {
    console.error('getDb not implemented');
  }
};
initdb();
