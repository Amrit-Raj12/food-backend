export class ApiResponseUtil {
    static success<T>(message: string, data: T) {
        return {
            message,
            data,
        };
    }
}