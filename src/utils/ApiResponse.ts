export class ApiResponse {
    statusCode: number;
    message: string;
    payload: any;

    constructor(
        statusCode: number,
        payload: any = null,
        message: string = "success",
    ) {
        this.statusCode = statusCode
        this.message = message
        this.payload = payload
    }
}