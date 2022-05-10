import { CreateOptions, DestroyOptions, FindOptions, Model, ModelStatic } from "sequelize";
import { MakeNullishOptional } from "sequelize/types/utils";

export default abstract class BaseRepository<M extends Model> {
  protected model!: ModelStatic<M>;
  public static readonly BaseQueryRaw = { raw: false, nest: false };

  constructor(model: ModelStatic<M>) {
    this.model = model;
  }

  async delete(options: DestroyOptions) {
    return this.model.destroy(options);
  }

  async findById(actionId: number, options?: FindOptions) {
    return this.model.findByPk<M>(actionId, { ...BaseRepository.BaseQueryRaw, ...options });
  }

  async findOne(conditions: FindOptions) {
    return this.model.findOne<M>({ ...BaseRepository.BaseQueryRaw, ...conditions });
  }

  async findAll(conditions: FindOptions) {
    return this.model.findAll<M>({ ...BaseRepository.BaseQueryRaw, ...conditions });
  }

  async existsById(id: number) {
    return Boolean(await this.model.findByPk(id));
  }

  async count(conditions: FindOptions) {
    return this.model.count(conditions);
  }

  async create(data: MakeNullishOptional<M>, options?: CreateOptions): Promise<M> {
    return this.model.create<M>(data, options);
  }
}
