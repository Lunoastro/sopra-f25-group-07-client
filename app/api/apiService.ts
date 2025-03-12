import { getApiDomain } from "@/utils/domain";
import { ApplicationError } from "@/types/error";

export class ApiService {
  private baseURL: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    this.baseURL = getApiDomain();
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }

  /**
   * Helper function to check the response, parse JSON,
   * and throw an error if the response is not OK.
   *
   * @param res - The response from fetch.
   * @param errorMessage - A descriptive error message for this call.
   * @returns Parsed JSON data.
   * @throws ApplicationError if res.ok is false.
   */
  private async processResponse<T>(
    res: Response,
    errorMessage: string,
  ): Promise<T> {
    // Check if the response is not ok
    if (!res.ok) {
      let errorDetail = res.statusText;
      let responseBody = '';
  
      // Try to read the body as text first
      try {
        responseBody = await res.text();
        
        // Try to parse it as JSON if possible
        const errorInfo = JSON.parse(responseBody);
        if (errorInfo?.message) {
          errorDetail = errorInfo.message;
        } else {
          errorDetail = responseBody; // If it doesn't have a message field, use the whole body as the error detail
        }
      } catch {
        // If parsing JSON fails, fallback to the raw text response
        errorDetail = responseBody;
      }
  
      // Construct the detailed error message
      const detailedMessage = `${errorMessage} (${res.status}: ${errorDetail})`;
      console.error("Error Details:", detailedMessage); // Log the detailed error
      console.error("Response Body:", responseBody); // Log the full response body
  
      // Create and throw an ApplicationError with the detailed message
      const error: ApplicationError = new Error(detailedMessage) as ApplicationError;
      error.info = JSON.stringify(
        { status: res.status, statusText: res.statusText },
        null,
        2,
      );
      error.status = res.status;
      throw error;
    }
    // If the response is ok, parse and return the JSON data
    return res.json() as Promise<T>;
  }
  


  /**
   * GET request.
   * @param endpoint - The API endpoint (e.g. "/users").
   * @returns JSON data of type T.
   */
  public async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
  
    // Merge the default headers with any additional headers passed in options
    const headers = {
      ...this.defaultHeaders,
      ...options.headers, // Merge custom headers
    };
  
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
      ...options, // Include any other options passed (such as body, etc.)
    });
  
    return this.processResponse<T>(
      res,
      "An error occurred while fetching the data.\n"
    );
  }
  

  /**
   * POST request.
   * @param endpoint - The API endpoint (e.g. "/users").
   * @param data - The payload to post.
   * @returns JSON data of type T.
   */
  public async post<T>(endpoint: string, data: unknown): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const res = await fetch(url, {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(data),
    });
    return this.processResponse<T>(
      res,
      "An error occurred while posting the data.\n",
    );
  }

  /**
   * PUT request.
   * @param endpoint - The API endpoint (e.g. "/users/123").
   * @param data - The payload to update.
   * @returns JSON data of type T.
   */
  public async put<T>(endpoint: string, data: unknown): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: this.defaultHeaders,
      body: JSON.stringify(data),
    });
    return this.processResponse<T>(
      res,
      "An error occurred while updating the data.\n",
    );
  }

  /**
   * DELETE request.
   * @param endpoint - The API endpoint (e.g. "/users/123").
   * @returns JSON data of type T.
   */
  public async delete<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: this.defaultHeaders,
    });
    return this.processResponse<T>(
      res,
      "An error occurred while deleting the data.\n",
    );
  }
}
