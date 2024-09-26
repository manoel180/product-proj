interface IFindAllProductsUseCase<T> {
  execute(): Promise<T[]>;
}
export default IFindAllProductsUseCase;
