import React, { FC, useState } from 'react';
import { MdAdd, MdFavoriteBorder, MdGradient, MdStar, MdStarBorder } from 'react-icons/md';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Product from '../../components/Product';
import Tab from '../../components/Tab';

import { Container, Wrapper, ProductBox, ProductImage, GridWrapper,Image, Badge, ProductInfo, WishList,
		Price, InputSimple, Tabs, TabActive, Title, Description, Box, ButtonSimple, RelatedProducts } from './styles';

const Detail: FC = () => {
	const [tabActive, setTabActive] = useState(1);

	return (
		<Container>
			<Breadcrumb />

			<Wrapper flexDirection="column">
				<ProductBox>
					<ProductImage flex={ 1 }>
						<Image>
							<Badge>-36%</Badge>
							<Badge>Free shipping</Badge>
						</Image>
					</ProductImage>

					<ProductInfo flex={ 1 } flexDirection="column">
						<h1>Carrots from Tomissy Farm</h1>

						<Flex>
							{ [1, 2, 3, 4, 5].map((star, index) => {
								return (
									(star < 5) ? <MdStar size={ 18 } color="#fdbc15" key={ index } /> : <MdStarBorder size={ 18 } key={ index } />
								);
							})}							
							<small>(1 customer review)</small>
						</Flex>

						<span>Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</span>

						<Flex flex={ 1 }>
							<GridWrapper gridTemplateColumns="1fr 1fr">
								<Title>SKU:</Title><Description>76645</Description>
								<Title>Category:</Title><Description>Vegetables</Description>
								<Title>Stock:</Title><Description>In Stock</Description>
								<Title>Farm:</Title><Description>Grocery Tarm Fields</Description>
							</GridWrapper>

							<GridWrapper gridTemplateColumns="1fr 1fr">
								<Title>Freshness:</Title><Description>1 days old</Description>
								<Title>Buy by:</Title><Description>pcs, kgs, box, pack</Description>
								<Title>Delivery:</Title><Description>in 2 days</Description>
								<Title>Delivery area:</Title><Description>Czech Republic</Description>
							</GridWrapper>
						</Flex>

						<Flex flexDirection="column">
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
								
								<Button iconLeft><MdAdd size={ 16 } />Add to cart</Button>
							</Box>

							<WishList align="center">
								<ButtonSimple>
									<MdFavoriteBorder color="#e6704b" /> 
									Add to my wish list
								</ButtonSimple>

								<ButtonSimple>
									<MdGradient color="#e6704b" /> 
									Compare
								</ButtonSimple>
							</WishList>
						</Flex>
					</ProductInfo>
				</ProductBox>

				<Tabs flexDirection="column" justify="flex-start">
					<Flex>
						<Tab onClick={() => setTabActive(1) } title="Description" active={ !!(tabActive == 1) }></Tab>					
						<Tab onClick={() => setTabActive(2) } title="Reviews" active={ !!(tabActive == 2) }></Tab>					
						<Tab onClick={() => setTabActive(3) } title="Questions" active={ !!(tabActive == 3) }></Tab>
					</Flex>

					<TabActive flexDirection="column" active={ !!(tabActive == 1) }>
						<h3>Origins</h3>
						<span>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</span>

						<h3>How to cook</h3>
						<span>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</span>

						<h3>Full of Vitamins!</h3>

						<table>
							<thead>
								<tr>
									<th>Vitamins</th>
									<th>Quantity</th>
									<th>% DV</th>
								</tr>
							</thead>

							<tbody>
							{ [0, 1, 2, 3, 4, 5, 6].map((_, index) => {
								return (
									<tr>
										<td>Vitamin A equiv.</td>
										<td>735 μg</td>
										<td>104 %</td>
									</tr>
								);
							})}
							</tbody>
						</table>
					</TabActive>
				</Tabs>

				<RelatedProducts flexDirection="column">
					<Flex justify="space-between">
						<h3>Related Products</h3>
						<h3>More Products</h3>
					</Flex>

					<Flex justify="space-between">
					{ [0, 1, 2, 3].map((_, index) => {
						return (
							<Product key={ index } />
						);
					})}
					</Flex>

				</RelatedProducts>
			</Wrapper>
		</Container>
	);
}

export default Detail;