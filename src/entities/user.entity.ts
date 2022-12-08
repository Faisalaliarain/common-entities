import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import * as randomString from "randomString";
import { DEVICE_TYPE } from "../enums/device_type.enum";
@Entity("user")
export class User {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  private beforeInsert() {
    this.id = randomString.generate({
      length: 10,
      charset: "numeric",
    });
  }

  @Column({ name: "device_id" })
  deviceId: string;

  @Column({ name: "master_pub_key", nullable: true })
  masterPubKey: string;

  @Column({
    name: "device_type",
    default: DEVICE_TYPE.ANDROID,
    type: "enum",
    enum: DEVICE_TYPE,
  })
  deviceType: DEVICE_TYPE;

  @Column({ name: "fcm_token", type: "text", nullable: true })
  fcmToken: string;

  @Column({ name: "is_blocked", default: false })
  isBlocked: boolean;

  @Column({ name: "push_notification", default: true })
  pushNotification: boolean;

  @Column({ name: "call_secret", unique: true, nullable: false })
  callSecret: string;

  @Column({ name: "phone_num", nullable: true })
  phoneNum: string;

  @Column({ nullable: true })
  email: string;

  @Column({ name: "is_phone_num_verified", default: false })
  isPhoneNumVerified: boolean;

  @Column({ name: "is_email_verified", default: false })
  isEmailVerified: boolean;

  @Column({ name: "is_email_2fa_enabled", default: true })
  isEmail2faEnabled: boolean;

  @Column({ name: "is_phone_2fa_enabled", default: false })
  isPhone2faEnabled: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;

  constructor(obj?) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
