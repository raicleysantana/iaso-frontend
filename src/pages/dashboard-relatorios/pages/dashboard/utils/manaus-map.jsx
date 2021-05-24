import React from 'react';
import { SVGMap } from "react-svg-map";
import Manaus from "../data/index";
import { getLocationName } from './utils';

import './svg-map.scss';

class TooltipHeatMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pointedLocation: null,
            focusedLocation: null,
			tooltipStyle: {
				display: 'none'
			},
            selectedLocation: null
		};

		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleLocationFocus = this.handleLocationFocus.bind(this);
        this.handleLocationBlur = this.handleLocationBlur.bind(this);
	}

	handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null, tooltipStyle: { display: 'none' } });
	}

	handleLocationMouseMove(event) {
		const tooltipStyle = {
			display: 'block',
			top: event.clientY + 10,
			left: event.clientX - 100
		};
		this.setState({ tooltipStyle });
	}

    handleLocationFocus(event) {
		const focusedLocation = getLocationName(event);
		this.setState({ focusedLocation: focusedLocation });
	}

    handleLocationBlur() {
		this.setState({ focusedLocation: null });
	}
    
	handleOnChange(selectedNode) {
		this.setState(prevState => {
			return {
				...prevState,
				selectedLocation: selectedNode.attributes.name.value
			};
		});
	}

	getLocationClassName(location, index) {
		// Generate random heat map
		return `svg-map__location svg-map__location--heat${index % 4}`;
	}

	render() {
		return (
				<div className="examples__block__map examples__block__map--usa">
					<SVGMap
						map={Manaus}
						locationClassName={this.getLocationClassName}
						onLocationMouseOver={this.handleLocationMouseOver}
						onLocationMouseOut={this.handleLocationMouseOut}
						onLocationMouseMove={this.handleLocationMouseMove} 
                        onLocationFocus={this.handleLocationFocus}
						onLocationBlur={this.handleLocationBlur}
                        onChange={this.handleOnChange}/>
					<div className="examples__block__map__tooltip" style={this.state.tooltipStyle}>
						{this.state.pointedLocation}
					</div>
				</div>
		);
	}
}

export default TooltipHeatMap;