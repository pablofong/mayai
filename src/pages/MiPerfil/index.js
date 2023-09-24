import { React, useEffect } from 'react';
import { ContainerDefault, ContainerYCenterCenter, InputContainer } from '../../common/Containers';
import { Description, Title } from '../../common/Header';
import InputText from '../../common/InputText';

import PrimaryButton from '../../common/PrimaryButton';
const MiPerfil = () => {
    useEffect(() => {
        document.title = "Invertir";
    }, []);


    return (
        <>
            <ContainerDefault>
                <ContainerYCenterCenter style={{ paddingTop: '3rem', }}>
                    <Title style={{ color: '#434343' }}>Ingresa tus datos para invertir en tu siguiente meta</Title>

                    <Description style={{ paddingTop: '1rem', fontWeight: 'bolder', color: '#D50023' }}>Información Personal</Description>
                    <InputContainer>
                        <InputText
                            title='Nombre completo'
                            id='name'
                            placeholder='Tu nombre'
                        />
                        <InputText
                            title='Apellido'
                            id='apellido'
                            placeholder='Tu apellido'
                        />
                        <InputText
                            title='Telefono'
                            id='telefono'
                            placeholder='Teléfono Celular'
                        />
                        <InputText
                            title='Email'
                            id='email'
                            placeholder='Email'
                        />
                        <InputText
                            title='Ciudad'
                            id='ciudad'
                            placeholder='Ciudad'
                        />
                        <InputText
                            title='Estado'
                            id='estado'
                            placeholder='Estado'
                        />
                        <InputText
                            title='Código Postal'
                            id='cp'
                            placeholder='C.P'
                        />
                        <InputText
                            title='Dirección'
                            id='direccion'
                            placeholder='Dirección'
                        />
                    </InputContainer>
                    <Description style={{ paddingTop: '1rem', fontWeight: 'bolder', color: '#D50023' }}>Detalles de la Meta</Description>
                    <InputContainer>
                        <InputText
                            title='Meta'
                            id='goal'
                            placeholder='Meta'
                        />
                        <InputText
                            title='Monto'
                            id='ammount'
                            placeholder='Monto $0.00'
                        />
                        <InputText
                            title='Descripcion Meta'
                            id='descriptionGoal'
                            placeholder='Descripción de la meta'
                        />
                        <InputText
                            title='Fondo de Inversión'
                            id='fondoInversion'
                            placeholder='Fondo de Inversión'
                        />
                        <InputText
                            title='Plazo'
                            id='longitude'
                            placeholder='Corto, Mediano, Largo Plazo'
                        />
                    </InputContainer>

                    <Description style={{ padding: '1rem ', fontWeight: 'bolder', color: '#D50023' }}>Al enviar  este formulario un agente se pondrá en contacto contigo dentro de las próximas 24 horas para indicarte los siguientes pasos</Description>

                    <PrimaryButton
                        color="#F4F8FA"
                        backgroundColor="#EB0129"
                        text='Enviar mi solicitud '
                    />
                </ContainerYCenterCenter>
            </ContainerDefault>
        </>
    )
}

export default MiPerfil;
