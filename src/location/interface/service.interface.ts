import { LocationAdapterInterface } from "./adapter.interface";

export interface LocationServiceInterface {
    getByRadius(
        latitude: number,
        longitude: number,
        radius: number,
        radiusType: string
    ): Promise<unknown[]>

    save(
        id: number,
        name: string,
        latitude: number,
        longitude: number
    ): Promise<void>
}
