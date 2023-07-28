import Button from './Button';

type Props = {
	onAdd: () => void
}

const IncrementButton = ({ onAdd }: Props) => {
	return <Button onClick={onAdd}>+</Button>
};
export default IncrementButton;
