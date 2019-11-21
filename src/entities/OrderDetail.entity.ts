import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Store, StoreValue } from './Store.entity';
import { Order, OrderValue } from './Order.entity';
import { PrimaryEntityBase, PrimaryEntity } from './PrimaryEntityBase';

export interface OrderDetailValue extends PrimaryEntity {
  /** 메뉴 이름 */
  name: string;

  /** 메뉴 단품 가격 */
  price: number;

  /** 수량 */
  quantity: number;

  /** 할인 금액 */
  discount: number;

  /** 포장 여부 */
  takeout: boolean;

  storeId?: string;

  store?: StoreValue;

  orderId?: string;

  order?: OrderValue;
}

@Entity({ name: 'OrderDetails' })
export class OrderDetail extends PrimaryEntityBase implements OrderDetailValue {
  @Column({ length: 100, nullable: false, comment: '메뉴 이름' })
  public name!: string;

  @Column({ default: 0, nullable: false, comment: '메뉴 단품 가격' })
  public price!: number;

  @Column({ default: 0, nullable: false, comment: '수량' })
  public quantity!: number;

  @Column({ default: 0, nullable: false, comment: '할인 금액' })
  public discount!: number;

  @Column({ default: false, nullable: false, comment: '포장여부' })
  public takeout!: boolean;

  @Column()
  public storeId!: string;

  @ManyToOne(
    type => Store,
    store => store.orderDetails
  )
  @JoinColumn({ name: 'storeId', referencedColumnName: 'id' })
  public store!: Store;

  @Column()
  public orderId!: string;

  @ManyToOne(
    type => Order,
    order => order.orderDetails
  )
  @JoinColumn({ name: 'orderId', referencedColumnName: 'id' })
  public order!: Order;
}