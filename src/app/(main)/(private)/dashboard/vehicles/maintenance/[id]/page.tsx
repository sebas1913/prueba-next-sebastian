"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { IVehicleResponse } from '@/app/core/application/dto/vehicles/vehicle-response.dto';
import Spinner from '@/ui/atoms/spinner/Spinner';
import Table from '@/ui/molecules/table/Table';
import { IMaintenanceResponse } from '@/app/core/application/dto/maintenance/maintenance-response';
import Title from '@/ui/atoms/Title';
import Paragraph from '@/ui/atoms/Paragraph';
import ButtonCreate from '@/ui/molecules/buttonCreate/ButtonCreate';
import Modal from '@/ui/organisms/modal/Modal';


function MaintenancePage() {
    const { id } = useParams();
    const [vehicleData, setVehicleData] = useState<any>(null);
    const [maintenanceData, setMaintenanceData] = useState<any>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchVehicleID = async () => {
            try {
                const response = await fetch(`/api/vehicle/get/${id}`);
                const result: IVehicleResponse = await response.json();
                setVehicleData(result.data);
            } catch (error) {
                console.log("Error al obtener los datos del vehículo", error);
            }
        };

        const fetchMaintenanceID = async () => {
            try {
                const response = await fetch(`/api/maintenance/get/${id}`);
                const result: IMaintenanceResponse = await response.json();
                setMaintenanceData(result.data);
            } catch (error) {
                console.log("Error al obtener los datos del mantenimiento", error);
            }
        };

        fetchMaintenanceID();
        fetchVehicleID();
        
    }, [id]);

    if (!vehicleData || !maintenanceData) {
        return <div className={styles.container}><Spinner /></div>;
    }

    const tableHeaders = [
        { label: 'Tipo', key: 'type' },
        { label: 'Fecha', key: 'date' },
        { label: 'Kilometraje', key: 'mileage' },
        { label: 'Notas', key: 'notes' }
    ];

    const tableData = maintenanceData.map((maintenance: any) => ({
        type: maintenance.type,
        date: maintenance.date,
        mileage: maintenance.mileage,
        notes: maintenance.notes
    }));

    return (
        <div className={styles.container}>
            <Title level={1}>Mantenimiento del Vehículo</Title>

            <div className={styles.card}>
                <div>
                    <img src={vehicleData.photo} alt="Foto del vehículo" width="200" height='auto' />
                </div>
                <div className={styles.description}>
                    <Paragraph>Marca: {vehicleData.make}</Paragraph>
                    <Paragraph>Modelo: {vehicleData.model}</Paragraph>
                    <Paragraph>Año: {vehicleData.year}</Paragraph>
                    <Paragraph>Placa: {vehicleData.licensePlate}</Paragraph>
                </div>
            </div>

            <ButtonCreate text='Agregar registro' onClick={openModal}></ButtonCreate>

            <Modal isVisible={isModalOpen} onClose={closeModal}>
                
                <h1>Hola</h1>

            </Modal>

            <Title level={2}>Detalles del Mantenimiento</Title>

            <Table headers={tableHeaders} data={tableData} />
            {/* <PaginationVehicle data={}></PaginationVehicle> */}
        </div>
    );
}

export default MaintenancePage;
