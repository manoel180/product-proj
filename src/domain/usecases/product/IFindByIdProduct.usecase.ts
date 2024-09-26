interface IFindByIdProductUseCase<T> {
  execute(id: string): Promise<T>;
}
export default IFindByIdProductUseCase;
