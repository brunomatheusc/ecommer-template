import React, { FC } from 'react';
import { MdClose, MdFavoriteBorder, MdGradient, MdRemove, MdStar, MdStarBorder } from 'react-icons/md';
import Breadcrumb from '../../components/Breadcrumb';
import Flex from '../../components/Flex';
import Grid from '../../components/Grid';

import { Container, Wrapper, BillingInfo, OrderSummary, Billing, Input, CheckboxWrapper, ProductTile, ProductImage, Price, Box, InputSimple } from './styles';

const Checkout: FC = () => {
	return (
		<Container>
			<Breadcrumb />

			<Wrapper>
				<Billing flexDirection="column">
					<BillingInfo flexDirection="column">
						<h3>Billing Info</h3>
						
						<Flex justify="space-between">
							<small>Please enter your billing info</small>
							<small>Step 1 of 5</small>
						</Flex>

						<Grid gridTemplateColumns="1fr 1fr" gridGap={ 32 }>
							<Flex flexDirection="column">
								<label htmlFor="">First Name</label>
								<Input placeholder="First Name" />
							</Flex>

							<Flex flexDirection="column">
								<label htmlFor="">Last Name</label>
								<Input placeholder="Last Name" />
							</Flex>
							
							<Flex flexDirection="column">
								<label htmlFor="">E-mail address</label>
								<Input placeholder="E-mail address" />
							</Flex>
							
							<Flex flexDirection="column">
								<label htmlFor="">Phone number</label>
								<Input placeholder="Phone number" />
							</Flex>
							
							<Flex flexDirection="column">
								<label htmlFor="">Address</label>
								<Input placeholder="Address" />
							</Flex>
							
							<Flex flexDirection="column">
								<label htmlFor="">Town / City</label>
								<Input placeholder="Town or City" />
							</Flex>
							
							<Flex flexDirection="column">
								<label htmlFor="">State / Country</label>
								<Input placeholder="State or Country" />
							</Flex>
							
							<Flex flexDirection="column">
								<label htmlFor="">ZIP/Postal Code</label>
								<Input placeholder="ZIP or Postal Code" />
							</Flex>
						</Grid>

						<CheckboxWrapper align="center">
							<input type="checkbox"/>
							<label htmlFor="">Ship to a different address?</label>
						</CheckboxWrapper>
					</BillingInfo>
				</Billing>
				
				<OrderSummary>
					<Flex flexDirection="column">
						<h2>Order Summary</h2>
						<small>Price can change depending on shipping method and taxes of your state.</small>

						<ProductTile flexDirection="row">
							<Flex flexDirection="column">
								<ProductImage />
			
								<Flex align="center">
									<MdFavoriteBorder color="#e5704b" />
									<span>Wishlist</span>
								</Flex>

								<Flex align="center">
									<MdGradient color="#e5704b" />
									<span>Compare</span>
								</Flex>
			
								<Flex align="center">
									<MdClose />
									<span>Remove</span>
								</Flex>
							</Flex>

							<Flex flexDirection="column">
								<h3>Product title</h3>

								<Grid gridTemplateColumns="1fr 1fr">
									<span>Farm:</span><span>Tharamis Farm</span>
									<span>Freshness:</span><span>1 day old</span>
								</Grid>

								<Flex>
									{ [1, 2, 3, 4, 5].map((star, index) => {
										return (
											(star < 5) ? <MdStar size={ 18 } color="#fdbc15" key={ index } /> : <MdStarBorder size={ 18 } key={ index } />
										);
									})}							
								</Flex>

								<Box align="center" justify="space-around">
									<Price>
										<h3>36.23 USD</h3>
										<strong>48.56 USD</strong>
									</Price>

									<InputSimple>
										<Flex align="center" justify="center">
											<span>1</span>
											
											<select name="" id="">
												<option value="pcs">Pcs</option>
											</select>
										</Flex>
									</InputSimple>
								</Box>
							</Flex>
						</ProductTile>
					</Flex>
				</OrderSummary>
			</Wrapper>
		</Container>
	);
}

export default Checkout;