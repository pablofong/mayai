import logoBanorte from '../../images/banortelonglogo.png';
import { styled, Grid } from '@mui/material';

//FaIcons
import { Logo } from '../../common/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { ContainerFooterTags, ContainerYCenterCenter, ContainerXCenter } from '../../common/Containers'

const Footer = () => {
  return (
    <FooterContainer>
      <a href="/" style={{
        textDecoration: 'none',
        color: 'inherit'
      }}>
        <Logo
          style={{
            width: '9.755em',
            height: '2rem',
            filter: 'brightness(0) invert(1)',
          }}
          src={logoBanorte}
          alt="logo" />
      </a>
      <ContainerYCenterCenter >
        <ContainerFooterTags>
          <a href="https://www.banorte.com/wps/portal/gfb?uri=nm:oid:banorte-te-informa.terminos-legales" style={{ textDecoration: 'none', color: 'inherit' }}>Términos Legales</a>
          <a href="https://www.banorte.com/wps/portal/gfb?uri=nm:oid:banorte-te-informa.aviso-de-privacidad" style={{ textDecoration: 'none', color: 'inherit' }}>Aviso de Privacidad</a>
          <a href="https://www.banorte.com/wps/portal/banorte/Home/inicio/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi3Y0MLTyMnQ28_QNCjQ0cnf1DnQNMXYxCzMz1wwkpiAJKG-AAjgZA_VFgJc7ujh4m5j4GBv4m7kYGjhZ-XibBppZGBp5mUAV4zCjIjTDIdFRUBADVkOkP/?uri=nm:oid:consulta-costos-y-comisiones" style={{ textDecoration: 'none', color: 'inherit' }}>Consulta los costos y las comisiones de nuestros productos</a>
        </ContainerFooterTags>
        <ContainerFooterTags>
          2023 Grupo Financiero Banorte. Derechos reservados.
        </ContainerFooterTags>
      </ContainerYCenterCenter>

      <ContainerXCenter style={{ gap: '1rem' }}>
        <a
          href='https://www.facebook.com/banorte'
          style={{ color: '#fff', fontSize: '1.5em' }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
          />
        </a>
        <a
          href='https://www.instagram.com/banorte_mx/'
          style={{ color: '#fff', fontSize: '1.5em' }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
          />
        </a>
      </ContainerXCenter>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 6fr 1fr',
  gap: '1rem',
  minWidth: '100%',
  bottom: 0,
  zIndex: '999',
  padding: '1rem 5rem',
  backgroundColor: theme.palette.red.main,
  color: theme.palette.white.main,
  fontSize: '1rem',
  fontFamily: 'Lato-Regular',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    padding: '2rem 0',

    alignItems: 'center',
    justifyContent: 'center',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
}));