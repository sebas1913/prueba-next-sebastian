import { HttpClient } from "@/app/infrastructure/utils/httpClient";
import { IVehicleResponse } from "@/app/core/application/dto/vehicles/vehicle-response.dto";
import { IVehicleRequest } from "@/app/core/application/dto/vehicles/vehicle-request";


export class VehicleService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(page: number, size: number): Promise<IVehicleResponse> {
        try {
            const response = await this.httpClient.get<IVehicleResponse>(`vehicles?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async create( body : FormData) {
        try {
            const data = this.httpClient.postFormData<IVehicleRequest>("vehicles", body);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }; 

    // async findById(id: number): Promise<Datum> {
    //     try {
    //         const response = await this.httpClient.get<Datum>(`vehicles/${id}`);
    //         return response;
            
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }

    // async put(id: number, body: IProjectRequest) {
	// 	try {
	// 		const response = this.httpClient.put<Datum, IProjectRequest>(`vehicles/${id}`, body);
	// 		return response;

	// 	} catch (error) {
	// 		console.log(error);
	// 		throw error;
	// 	}
	// }
    

    async destroy(id: number){
        try {
            const response = await this.httpClient.delete(`vehicles/${id}`);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }



}