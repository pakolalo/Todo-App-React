import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItems = localStorage.getItem(itemName);

      let parsedItems;

      if (!localStorageItems) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
      } else {
        parsedItems = JSON.parse(localStorageItems);
        setItem(parsedItems);
      }

      setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);
  
  const saveItem = (newItem) => {
  localStorage.setItem(itemName, JSON.stringify(newItem));
  setItem(newItem);
};

  return {
    error,
    loading,
    item,
    saveItem,
  };
}

export { useLocalStorage };