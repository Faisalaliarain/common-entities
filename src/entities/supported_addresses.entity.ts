import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { BLOCKCHAINS } from '../enums/blockchains.enum'

@Entity('supported_addresses')
export class SupportedAddresses {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	address: string

	@Column({ name: 'is_imported', default: false })
	isImported: boolean

	@Column({ name: 'is_blocked', default: false })
	isBlocked: boolean

	@Column({ name: 'block_chain', type: 'enum', enum: BLOCKCHAINS, nullable: false })
	blockChain: BLOCKCHAINS

	@Column({ name: 'user_ids', type: 'simple-array' })
	userIds: string[]

	@Column({ name: 'is_synced_with_moralis', default: false })
	isSyncedWithMoralis: boolean

	@Column({ name: 'is_evm', default: true })
	isEvm: boolean

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'update_at' })
	updatedAt: Date
}
