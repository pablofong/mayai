import { Button, styled } from '@mui/material';

const PrimaryButton = ({ color, backgroundColor, text, url }) => {
    const ButtonSection = styled(Button)(({ theme }) => ({
        display: 'inline-flex',
        padding: '0.625rem 1.875rem',
        alignItems: 'flex-start',
        gap: '0.625rem',
        fontFamily: 'Lato-Regular',
        borderRadius: '1.875rem',
        boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.15)',
        fontSize: '1.5rem',
        color: color,
        backgroundColor: backgroundColor,
        margin: 0,
        border: 'none',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1rem',
        },
    }));

    return (
        <ButtonSection href={url}>
            {text}
        </ButtonSection>
    );
};

export default PrimaryButton;