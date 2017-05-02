/**
 * Provides a `Product` object
 */
export class Product {
  constructor(
  	public id : string,
    public date: string,
    public description: string[],
    public imageUrl: string) {
  }
}
