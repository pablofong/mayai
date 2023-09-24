import { styled } from '@mui/material';
import { ContainerYCenterFlexstart } from '../Containers';
const InputText = (props) => {
    return (
        <ContainerYCenterFlexstart
            style={{
                marginTop: '.5rem',
                display: 'flex',
            }}>
            <HeaderInput>{props.title}</HeaderInput>
            <InputContainer
                style={{ backgroundColor: props.backgroundColor || "#F4F8FA", }}>
                <Input
                    id={props.id}
                    name={props.name}
                    type='text'
                    placeholder={props.placeholder}
                />
            </InputContainer>
        </ContainerYCenterFlexstart>
    )
}
export default InputText

const HeaderInput = styled('div')(({ theme }) => ({
    fontFamily: 'Lato-Regular',
    fontSize: '0.8rem',
    fontWeight: 900,
    color: theme.palette.red.main,
    margin: '0 0 1rem 2rem',
    [theme.breakpoints.down('lg')]: {
        margin: '0',
        marginBottom: '1rem',
    },
}));

const InputContainer = styled('div')(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.white.main,
    justifyContent: (props) =>
        props.centerInputText ? "center" : "flex-start",
    width: '90%',
    borderRadius: '3.75rem',
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.15)',
    padding: '1rem 2rem',
    [theme.breakpoints.down('lg')]: {
        width: '80%',
    },
}));

const Input = styled('input')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: (props) => props.centerInputText ? "center" : "flex-start",
    textAlign: (props) => (props.centerInputText ? "center" : "auto"),
    alignContent: "center",
    border: "none",
    outline: "none",
    borderRadius: 10,
    width: "100%",
    backgroundColor: 'transparent',
    fontFamily: 'Lato-Regular',
    fontSize: '1rem',
    fontWeight: '900',
}));
