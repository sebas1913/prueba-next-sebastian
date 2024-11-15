"use client";
import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { IVehicleResponse } from '@/app/core/application/dto/vehicles/vehicle-response.dto';


function MaintenancePage() {
    const { id } = useParams();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchProjectID = async () => {
            try {
                const response = await fetch(`/api/vehicle/get/${id}`);
                const result: IVehicleResponse = await response.json();
                setData(result.data);

                console.log(result);
            } catch (error) {
                console.log("Error al obtener los datos", error);
            }
        };

        fetchProjectID();
    }, [id]);

    if (!data) {
        return <div className={styles.container}>Cargando...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Mantenimiento del Vehículo</h1>
            <h2>ID: {data.id}</h2>
            <p><strong>Marca:</strong> {data.make}</p>
            <p><strong>Modelo:</strong> {data.model}</p>
            <p><strong>Año:</strong> {data.year}</p>
            <p><strong>Placa:</strong> {data.licensePlate}</p>
            <img src={data.photo} alt="Foto del vehículo" width="300" />
        </div>
    );
}       

export default MaintenancePage;
