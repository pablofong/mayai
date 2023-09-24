import logoHSDA from '../../images/logotype-hsda-dark-background.svg';
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
        <Logo src={logoHSDA} alt="logo" />
      </a>
      <ContainerYCenterCenter >
        <ContainerFooterTags>
          <a href="/terminosycondiciones" style={{ textDecoration: 'none', color: 'inherit' }}>Términos y Condiciones</a>
          <a href="/avisoprivacidad" style={{ textDecoration: 'none', color: 'inherit' }}>Aviso Privacidad</a>
          <a href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
          <a href="/formulario-preadmision" style={{ textDecoration: 'none', color: 'inherit' }}>Pre-admisión</a>
        </ContainerFooterTags>
        <ContainerFooterTags style={{marginTop: '1rem'}}>
          <a href="/formulario-presupuesto" style={{ textDecoration: 'none', color: 'inherit' }}>Presupuesto</a>
          <a href="/formulario-solicitud-recorrido" style={{ textDecoration: 'none', color: 'inherit' }}>Solicitud de recorrido</a>
          <a href="/formulario-credencializacion" style={{ textDecoration: 'none', color: 'inherit' }}>Credencialización</a>
          <a href="/menucafeteria" style={{ textDecoration: 'none', color: 'inherit' }}>Menú de cafetería</a>
        </ContainerFooterTags>
      </ContainerYCenterCenter>

      <ContainerXCenter style={{gap: '1rem'}}>
        <a
          href='https://www.facebook.com/hospitalsandiegodealcala/'
          style={{ color: '#fff', fontSize: '1.5em' }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
          />
        </a>
        <a
          href='https://www.instagram.com/hospitalsandiegodealcala/?hl=en'
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
  backgroundColor: theme.palette.blueberry.main,
  color: theme.palette.white.main,
  fontSize: '1rem',
  fontFamily: 'Avenir',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    paddingBottom: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
}));