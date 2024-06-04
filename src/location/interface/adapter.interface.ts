export interface LocationAdapterInterface {
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