import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'date' })
  createdAt: Date = new Date();

  @Field()
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: 'text' })
  firstName!: string;

  @Field()
  @Property({ type: 'text' })
  lastName!: string;

  @Field()
  @Property({ type: 'text' })
  address!: string;

  @Field()
  @Property({ type: 'text' })
  postCode!: string;

  @Field()
  @Property({ type: 'text', unique: true })
  phoneNumber!: string;

  @Field()
  @Property({ type: 'text', unique: true })
  email!: string;

  @Field()
  @Property({ type: 'text', unique: true })
  username!: string;

  @Property({ type: 'text' })
  password!: string;
}
