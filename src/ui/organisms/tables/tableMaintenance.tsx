"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from './tables.module.scss';
import Table from "@/ui/molecules/table/Table";
import { IMaintenanceResponse } from "@/app/core/application/dto/maintenance/maintenance-response";


interface TableVehiclesProps {
    dataResponse: IMaintenanceResponse;
}

const TableVehicles: React.FC<TableVehiclesProps> = ({ dataResponse }) => {
    const router = useRouter();
    const { data } = dataResponse;

    const headers = [
        { label: "Fecha", key: "date" },
        { label: "Tipo", key: "type" },
        { label: "Kilometraje", key: "mileage" },
        { label: "Notas", key: "notes" }
    ];

    const formatedData = data.map((maintenance) => ({
        date: maintenance.date,
        type: maintenance.type,
        mileage: maintenance.mileage,
        notes: maintenance.notes
    }));

    return (
        <>  
            <Table headers={headers} data={formatedData}></Table>
        </>

    )
}

export default TableVehicles;



