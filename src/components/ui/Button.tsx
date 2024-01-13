import { Button as MuiButton } from '@mui/material';
import type { MouseEventHandler } from 'react';

type ButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <MuiButton variant="contained" onClick={props.onClick}>
      {props.label}
    </MuiButton>
  );
};

export default Button;
