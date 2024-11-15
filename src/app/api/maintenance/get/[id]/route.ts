import { NextResponse } from "next/server";
import { MaintenanceService } from "@/app/infrastructure/services/maintenance.service";


export async function GET( _: Request, {params} : {params: Promise<{id: number}>}){
    const service = new MaintenanceService();

    try {
        const id = (await params).id
        const response = await service.findById(id);


        return NextResponse.json(response, {status: 200});
        

    } catch (error) { 
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}