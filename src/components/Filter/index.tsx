import React, { FC } from 'react';

import { Container, Filters, AppliedFilters, Component, Badge } from './styles';

import { FiX } from 'react-icons/fi';

const Filter: FC = () => {
	return (
		<Container>
			<Filters>
				<Component>
					<div>
						<input type="radio" name="filterText" id=""/>
						<span>Filtre text</span>
					</div>

					<div>
						<input type="radio" name="filterText" id=""/>
						<span>Filtre text</span>
					</div>
				</Component>

				<Component>
					<div>
						<input type="checkbox" name="" id=""/>
						<span></span>
					</div>
					
					<Badge>Nbm</Badge>
				</Component>

				<Component>
					<div>
						<input type="checkbox" name="" id=""/>
						<span></span>
					</div>
					
					<Badge>Nbm</Badge>
				</Component>

				<Component>
					<div>
						<input type="checkbox" name="" id=""/>
						<span></span>
					</div>

					<select name="" id="">
						<option value="">Select</option>
					</select>
				</Component>
			</Filters>

			<AppliedFilters>
				<span>Applied filtres:</span>

				<Badge>Selected filtre <FiX size={ 12 } color="#C8DEB3" /></Badge>
				<Badge>Selected filtre <FiX size={ 12 } color="#C8DEB3" /></Badge>
			</AppliedFilters>
		</Container>
	);
}

export default Filter;