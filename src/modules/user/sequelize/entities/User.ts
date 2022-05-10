import { Table, Column, DataType } from "sequelize-typescript";
import ModelBase, { IModelBaseAttributes } from "../../../../database/ModelBase";

// These are all the attributes in the User model
export interface IUserAttributes extends IModelBaseAttributes {
  username: string;
}

export interface IUserCreationAttributes extends Omit<IUserAttributes, "id"> {}

@Table({
  tableName: "users",
  underscored: true,
  timestamps: true,
})
export class User extends ModelBase<IUserAttributes> implements IUserAttributes {
  @Column(DataType.STRING)
  username!: string;
}

export default User;
