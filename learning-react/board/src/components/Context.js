import { createContext, memo, useEffect, useMemo, useState } from "react";

const ItemContext = createContext({
	state: {
		items: []
	},
	actions: {
		setItems: () => {}
	}
});

const ItemProvider = memo(({ children }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
    const getStorage = JSON.parse(window.localStorage.getItem('items'));
		if (getStorage)
			setItems(getStorage);
  }, []);

	useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

	const value = useMemo(() => ({
		state: { items },
		actions: { setItems }
	}), [items, setItems]);
	return (
		<ItemContext.Provider value={value}>
			{children}
		</ItemContext.Provider>
	);
});

export { ItemProvider };

export default ItemContext;
