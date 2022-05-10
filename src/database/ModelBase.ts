import { Column, AutoIncrement, PrimaryKey, DataType, Model } from "sequelize-typescript";

export interface IModelBaseAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default abstract class ModelBase<T> extends Model<IModelBaseAttributes, T> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.DATE)
  createdAt!: Date;

  @Column(DataType.DATE)
  updatedAt!: Date;
}
