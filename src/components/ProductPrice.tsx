type Props = {
	price: number
};

const ProductPrice = ({ price }: Props) => {
	return <div>
		{price}
	</div>
};
export default ProductPrice;