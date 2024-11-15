import ButtonCreate from "@/ui/molecules/buttonCreate/ButtonCreate";
import { FormField } from "@/ui/molecules/common/FormField"
import { useState } from "react";
import { useForm } from "react-hook-form";
import VehicleForm from "../vehicleForm/VehicleForm";
import Modal from "../modal/Modal";



const Panel: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vehicleID, setVehicleID] = useState<number>();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVehicleID(undefined);
    };


    
    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <ButtonCreate text="Agregar vehículo" onClick={openModal} />

            <Modal isVisible={isModalOpen} onClose={closeModal}>
                {/* <VehicleForm closeModal={closeModal} projectID={projectID}/> */}
                <VehicleForm closeModal={closeModal} />

            </Modal>

        </div>
    )
}

export default Panel;