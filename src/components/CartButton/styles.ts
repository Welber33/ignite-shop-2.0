import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 'none',
  borderRadius: 6,
  position: 'relative',

  background: '$gray800',
  color: '$gray500',

  width: '3rem',
  height: '3rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500'
      },
      green: {
        background: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },
      }
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 32,
        },
      }
    },
  },

  defaultVariant: {
    color: 'gray',
    size: 'medium',
  },
})