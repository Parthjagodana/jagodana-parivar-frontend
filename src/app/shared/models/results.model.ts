export interface Results<T> {
    data: T,
    error: string[],
    message: string,
    status: string,
    meta: any,
    code: number
}