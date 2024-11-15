import { HttpClient } from "@/app/infrastructure/utils/httpClient";
import { IMaintenanceResponse } from "@/app/core/application/dto/maintenance/maintenance-response";


export class MaintenanceService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async findById(id: number): Promise<IMaintenanceResponse> {
        try {
            const response = await this.httpClient.get<IMaintenanceResponse>(`vehicles/${id}/maintenance`);
            return response;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}