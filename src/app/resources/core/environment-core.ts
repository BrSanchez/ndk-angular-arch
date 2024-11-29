

export interface EnvironmentCore {
  production: boolean;
  microservices: {
    [key: string]: string;
  };
}
