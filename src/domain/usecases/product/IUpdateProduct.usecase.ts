
interface IUpdateProductUseCase<T, R> {
  execute(id: string, request: R): Promise<T>;
}
export default IUpdateProductUseCase;
