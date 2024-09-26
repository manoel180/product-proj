interface ICreateProductUseCase<T, R> {
  execute(request: R): Promise<T>;
}
export { ICreateProductUseCase };