import React, { Component } from "react";

type BoundaryProps = {
	children: string | JSX.Element | JSX.Element[];
};

export default class ErrorBoundary extends React.Component<BoundaryProps, { hasError: boolean }> {
	constructor(props: BoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error?: any, info?: any) {
		this.setState({
			hasError: true,
		});
		console.log(error.toString());
	}

	render() {
		if (this.state.hasError) {
			return null;
		}
		return this.props.children;
	}
}
