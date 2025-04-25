const getLocalData = (nameSpace) => {
  const todolist = localStorage.getItem(nameSpace);
  if (!todolist) {
    localStorage.setItem(nameSpace, "[]");
    return [];
  }
  try {
    return JSON.parse(todolist);
  } catch (err) {
    console.error("Error when JSON parse localStorage", err);
    return [];
  }
};
const updateLocalData = (nameSpace, data) =>
  localStorage.setItem(nameSpace, JSON.stringify(data));
const removeLocalData = (nameSpace) => localStorage.removeItem(nameSpace);
export { getLocalData, updateLocalData, removeLocalData };

//AI clean code
// const LocalStorageService = {
//   get: (key, defaultValue = []) => {
//     const raw = localStorage.getItem(key);
//     if (!raw) {
//       localStorage.setItem(key, JSON.stringify(defaultValue));
//       return defaultValue;
//     }
//     try {
//       return JSON.parse(raw);
//     } catch {
//       return defaultValue;
//     }
//   },

//   set: (key, data) => {
//     localStorage.setItem(key, JSON.stringify(data));
//   },

//   remove: (key) => {
//     localStorage.removeItem(key);
//   },
// };

// export default LocalStorageService;
