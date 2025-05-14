export class ApplicationError extends Error {
  info: string;
  status: number;

  constructor(message: string, info: string, status: number) {
    super(message);
    this.name = 'ApplicationError'; // Optional, but good practice
    this.info = info;
    this.status = status;
  }
}
