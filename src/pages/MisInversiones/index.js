import { React, useEffect } from 'react';

const MisInversiones = () => {
    useEffect(() => {
        document.title = "Mis Inversiones";
    }, []);
    return (
        <>
            <h1>Mis Inversiones</h1>
        </>
    )
}

export default MisInversiones;