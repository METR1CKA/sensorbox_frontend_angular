export interface Response<T> {
    status: boolean,
    mensaje: string,
    data: T
}