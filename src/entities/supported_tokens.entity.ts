import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { BLOCKCHAINS } from '../enums/blockchains.enum'
import { ERC_TYPE } from '../enums/erc_type.enum'

@Entity('supported_tokens')
export class SupportedTokens {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	symbol: string

	@Column({ nullable: true })
	unit: string

	@Column({ name: 'block_chain', type: 'enum', enum: BLOCKCHAINS, nullable: false })
	blockChain: BLOCKCHAINS

	@Column({ name: 'erc_type', type: 'enum', enum: ERC_TYPE, nullable: true })
	ercType: ERC_TYPE

	@Column()
	decimals: number

	@Column({ name: 'logo_uri' })
	logoURI: string

	@Column({ nullable: true })
	address: string

	@Column({ name: 'is_system_token', default: true })
	isSystemToken: boolean

	@Column({ name: 'is_native_token', default: false })
	isNativeToken: boolean

	@Column({ name: 'is_enabled', default: true })
	isEnabled: boolean

	@Column({ name: 'is_commodity_token', default: false })
	isCommodityToken: boolean

	@Column({ name: 'is_stable_token', default: false })
	isStableToken: boolean

	@Column({ name: 'is_default_enabled', default: false })
	isDefaultEnabled: boolean

	@Column({ name: 'cmc_id', nullable: true })
	cmcId: number

	@Column({ nullable: true, type: 'double precision' })
	price: number

	@Column({ name: 'percent_change_24h', type: 'double precision', nullable: true })
	percentChange24h: number

	@Column({ name: 'percent_change_7d', type: 'double precision', nullable: true })
	percentChange7d: number

	@Column({ name: 'is_moonpay_enabled', default: false })
	isMoonPayEnabled: boolean

	@Column({ name: 'shariah_token_id', nullable: true })
	shariahTokenId: number

	@Column({ name: 'disable_date', nullable: true })
	disableDate: number

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'update_at' })
	updatedAt: Date

	constructor(obj?) {
		if (obj) {
			Object.assign(this, obj)
		}
	}
}
