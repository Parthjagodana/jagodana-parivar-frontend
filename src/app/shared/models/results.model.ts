export interface Results<T> {
    data: T,
    error: string[],
    message: string,
    status: boolean,
    meta: any,
    code: number
}