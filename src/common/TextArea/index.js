import { styled } from '@mui/material';
import { ContainerYCenterFlexstart } from '../Containers';
import { faPaperPlane, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TextArea = (props) => {
    return (
        <Content>
            <StartAndInputContainer>
                <InputContainer>
                    <Input
                        id={props.id}
                        name={props.name}
                        type='text'
                        placeholder={props.placeholder}
                        rows={2}
                    />
                </InputContainer>
                <StartAdornment>
                    <FontAwesomeIcon icon={faPaperPlane} className="search-icon" />
                </StartAdornment>
            </StartAndInputContainer>
        </Content>
    )
}
export default TextArea


const Input = styled('textarea')(({ theme }) => ({
    display: "flex",
    resize: 'none',
    justifyContent: "flex-start",
    alignItems: 'center',
    textAlign: "auto",
    alignContent: "center",
    border: "none",
    outline: "none",
    borderRadius: 10,
    width: "100%",
    backgroundColor: 'transparent',
    fontFamily: 'Lato-Regular',
    fontSize: '1rem',
}));

const Content = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#F4F8FA',
    border: "none",
    borderRadius: 30,
    padding: '.9rem 1rem',
    fontFamily: 'Avenir',
    width: '90%',
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.15)',
    [theme.breakpoints.down('lg')]: {
        width: '85%'
    },
}));
const StartAndInputContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: theme.palette.lightGray.main,
    width: '100%',
}));
const StartAdornment = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    color: theme.palette.brown.main,
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: '1.2rem',
    marginRight: '1rem',
}));
const InputContainer = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: (props) =>
        props.centerInputText ? "center" : "flex-start",
    width: '100%',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
    },
}));