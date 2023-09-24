import { React, useEffect } from 'react';

const MiPerfil = () => {
    useEffect(() => {
        document.title = "Mi Perfil";
    }, []);
    return (
        <>
            <h1>MiPerfil</h1>
        </>
    )
}

export default MiPerfil;