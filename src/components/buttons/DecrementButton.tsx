import Button from './Button';

type Props = {
	onRemove: () => void
}

const DecrementButton = ({ onRemove }: Props) => {
	return <Button onClick={onRemove}>-</Button>
};
export default DecrementButton;
