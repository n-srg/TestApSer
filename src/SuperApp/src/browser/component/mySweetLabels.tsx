import * as React from 'react';

export class MySweetLabel extends React.Component<myProps, {}> {
	constructor(props) {
		super(props);
	}

	public render() {
		return <div>hi!!{this.props.name}</div>;
	}
}

interface myProps {
	name: string;
}
