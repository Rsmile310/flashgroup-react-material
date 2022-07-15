import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import useLocales from '../hooks/useLocales';

const ButtonStyle = styled(Button)({
  backgroundColor: '#B158E2',
  borderRadius: '24px',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export default function DefautlBtn() {
  const { translate } = useLocales();
  return (
    <ButtonStyle
      href="https://drive.google.com/file/d/10tlNa7GwOlaV7ZD7ovmYaOLq5sLSwUlU/view"
      color="default"
      variant="extended"
      target="_blank"
    >
      {translate('FlashPaper')}
    </ButtonStyle>
  );
}
