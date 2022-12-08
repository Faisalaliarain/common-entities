import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { SupportedAddresses } from "./supported_addresses.entity";
import { SupportedTokens } from "./supported_tokens.entity";
import { User } from "./user.entity";

@Entity("user_token")
export class UserToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "is_enabled", default: true })
  isEnabled: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;

  @ManyToOne(
    (type) => SupportedAddresses,
    (supportedAddresses) => supportedAddresses.id,
    {
      nullable: false,
    }
  )
  @JoinColumn({ name: "address_id" })
  addressId: number;

  @ManyToOne((type) => SupportedTokens, (supportedToken) => supportedToken.id, {
    nullable: false,
  })
  @JoinColumn({ name: "token_id" })
  tokenId: number;

  @ManyToOne((type) => User, (user) => user.id, {
    nullable: false,
  })
  @JoinColumn({ name: "user_id" })
  userId: string;

  constructor(obj?: any) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
