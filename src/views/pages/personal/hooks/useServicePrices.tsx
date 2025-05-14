import { useState } from "react";

export function useServicePrice(props: {
	prices: { unit: string; price: number; id: number }[];
	setPrices: (prices: { unit: string; price: number; id: number }[]) => void;
}) {
	const deleteSection = (idToDelete: number) => {
		const updatedSections = props.prices.filter((section) => section.id !== idToDelete);
		props.setPrices(updatedSections);
	};

	const addNewPrice = () => {
		const newPriceObject = { unit: "", price: 0, id: Date.now() };

		props.setPrices([...props.prices, newPriceObject]);
	};

	const handlePriceChange = (id: number, field: string, value: any) => {
		const updatedPrices = props.prices.map((price) => (price.id === id ? { ...price, [field]: value } : price));
		props.setPrices(updatedPrices);
	};

	return {
		prices: props.prices,
		deleteSection,
		addNewPrice,
		handlePriceChange,
	};
}
