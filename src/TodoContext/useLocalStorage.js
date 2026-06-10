import React from 'react';

/**
 * useLocalStorage
 *
 * Custom hook that manages data persisted to browser localStorage.
 * Loads data from localStorage on mount with a simulated 2-second delay.
 * Provides methods to read and save items to localStorage.
 *
 * @param {string} itemName - The key name for storing in localStorage
 * @param {*} initialValue - Default value if item doesn't exist in localStorage
 * @returns {Object} Object containing item, setItem, loading, error, and saveItem
 * @returns {*} returns.item - The stored item
 * @returns {Function} returns.saveItem - Function to save a new item
 * @returns {boolean} returns.loading - Loading state during initial fetch
 * @returns {boolean} returns.error - Error state if something fails
 */
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
  },);
  
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