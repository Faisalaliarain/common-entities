"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var randomString = require("randomString");
var device_type_enum_1 = require("../enums/device_type.enum");
var User = /** @class */ (function () {
    function User(obj) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
    User.prototype.beforeInsert = function () {
        this.id = randomString.generate({
            length: 10,
            charset: "numeric"
        });
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], User.prototype, "beforeInsert");
    __decorate([
        (0, typeorm_1.Column)({ name: "device_id" })
    ], User.prototype, "deviceId");
    __decorate([
        (0, typeorm_1.Column)({ name: "master_pub_key", nullable: true })
    ], User.prototype, "masterPubKey");
    __decorate([
        (0, typeorm_1.Column)({
            name: "device_type",
            "default": device_type_enum_1.DEVICE_TYPE.ANDROID,
            type: "enum",
            "enum": device_type_enum_1.DEVICE_TYPE
        })
    ], User.prototype, "deviceType");
    __decorate([
        (0, typeorm_1.Column)({ name: "fcm_token", type: "text", nullable: true })
    ], User.prototype, "fcmToken");
    __decorate([
        (0, typeorm_1.Column)({ name: "is_blocked", "default": false })
    ], User.prototype, "isBlocked");
    __decorate([
        (0, typeorm_1.Column)({ name: "push_notification", "default": true })
    ], User.prototype, "pushNotification");
    __decorate([
        (0, typeorm_1.Column)({ name: "call_secret", unique: true, nullable: false })
    ], User.prototype, "callSecret");
    __decorate([
        (0, typeorm_1.Column)({ name: "phone_num", nullable: true })
    ], User.prototype, "phoneNum");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ name: "is_phone_num_verified", "default": false })
    ], User.prototype, "isPhoneNumVerified");
    __decorate([
        (0, typeorm_1.Column)({ name: "is_email_verified", "default": false })
    ], User.prototype, "isEmailVerified");
    __decorate([
        (0, typeorm_1.Column)({ name: "is_email_2fa_enabled", "default": true })
    ], User.prototype, "isEmail2faEnabled");
    __decorate([
        (0, typeorm_1.Column)({ name: "is_phone_2fa_enabled", "default": false })
    ], User.prototype, "isPhone2faEnabled");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "created_at" })
    ], User.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: "update_at" })
    ], User.prototype, "updatedAt");
    User = __decorate([
        (0, typeorm_1.Entity)("user")
    ], User);
    return User;
}());
exports.User = User;
