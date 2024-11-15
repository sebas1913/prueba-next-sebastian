// "use client";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { IMaintenanceRequest } from "@/app/core/application/dto/maintenance/maintenance-request";
// import { FormField } from "@/ui/molecules/common/FormField";
// import { yupResolver } from "@hookform/resolvers/yup";
// import styles from './form.module.scss';
// import Title from "@/ui/atoms/Title";
// import Button from "@/ui/atoms/button/Button";

// interface IProps {
//     closeModal: () => void;
// }

// const projectSchema = yup.object().shape({
//     title: yup
//         .string()
//         .required('El título del proyecto es requerido'),
//     description: yup
//         .string()
//         .required('La descripción del proyecto es requerida'),
//     startDate: yup
//         .date()
//         .required('La fecha de inicio es requerida'),
//     endDate: yup
//         .date()
//         .required('La fecha de fin es requerida')
// })


// const MaintenanceForm = ({  closeModal }: IProps) => {
//     const router = useRouter();

//     const {
//         control,
//         handleSubmit,
//         formState: { errors },
//         setValue

//     } = useForm<IMaintenanceRequest>({
//         mode: "onChange",
//         reValidateMode: "onChange",
//         resolver: yupResolver(projectSchema)
//     });


//     const handleProject = async (data: IMaintenanceRequest) => {

//             const response = await fetch('/api/projects/create', {
//                 method: 'POST',
//                 body: JSON.stringify(data)
//             })

//             if (!response) {
//                 console.log('Error el enviar el formulario :(');
//             }
//         }


//         router.refresh();
//         closeModal();
//     }

//     return (
//         <form className={styles.form} onSubmit={handleSubmit(handleProject)}>
//             <Title level={2} className={styles.title}>Proyectos</Title>

//             <FormField<IProjectRequest>
//                 control={control}
//                 type="text"
//                 label="Título"
//                 name="title"
//                 error={errors.title}
//                 placeholder="Ingresa el título del proyecto"
//             />

//             <FormField<IProjectRequest>
//                 control={control}
//                 type="text"
//                 label="Descripción"
//                 name="description"
//                 error={errors.description}
//                 placeholder="Ingresa la decripción del proyecto"
//             />

//             <FormField<IProjectRequest>
//                 control={control}
//                 type="date"
//                 label="Fecha inicio"
//                 name="startDate"
//                 error={errors.startDate}
//                 placeholder="Ingresa la fecha de inicio del proyecto"
//             />

//             <FormField<IProjectRequest>
//                 control={control}
//                 type="date"
//                 label="Fecha fin"
//                 name="endDate"
//                 error={errors.startDate}
//                 placeholder="Ingresa la fecha de fin del proyecto"
//             />

//             <Button className="primary-big" type="submit">Enviar</Button>

//         </form>
//     )

// export default MaintenanceForm;
