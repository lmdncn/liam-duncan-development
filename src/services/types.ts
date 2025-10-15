/**
 * Service layer type definitions
 * These types define the contract between the data layer and components
 */

export interface DataClient {
  /**
   * Fetch all items from a resource
   */
  get<T>(resource: string): Promise<T>;

  /**
   * Fetch a single item by ID from a resource
   */
  getById<T>(resource: string, id: string): Promise<T | undefined>;
}

/**
 * Available data resources
 */
export type DataResource =
  | 'experiences'
  | 'skills'
  | 'projects'
  | 'education'
  | 'featured'
  | 'hero';

/**
 * Service error types for better error handling
 */
export class DataServiceError extends Error {
  constructor(
    message: string,
    public resource: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'DataServiceError';
  }
}
