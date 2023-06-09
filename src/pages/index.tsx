import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export function Head(): JSX.Element
{
	return (
		<title>adsfa</title>
	);
}

export default function Index(): JSX.Element
{
	return (
		<Stack
			alignItems='center'
			height='100%'
			justifyContent='center'
			left={0}
			position='fixed'
			top={0}
			width='100%'
		>
			<Typography fontWeight='bold' variant='h3'>Hello, World!</Typography>
		</Stack>
	);
}