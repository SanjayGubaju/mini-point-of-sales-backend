import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { OrderDetail } from './OrderDetail';
import { Payment } from './Payment';
import { Store } from './Store';
import { PrimaryEntityBase } from '../@typings/Entity/PrimaryEntityBase';

@Entity({ name: 'Orders' })
export class Order extends PrimaryEntityBase {
    @Column({ default: 0, nullable: false, comment: '주문 가격' })
    public amounts: number;
    @Column({ default: 0, nullable: false, comment: '할인 금액' })
    public discount: number;
    @Column()
    public storeId: string;

    @ManyToOne((type) => Store, (store) => store.orders)
    @JoinColumn({ name: 'storeId', referencedColumnName: 'id' })
    public store: Store;

    @OneToMany((type) => OrderDetail, (orderDetail) => orderDetail.order)
    public orderDetails: OrderDetail[];

    @OneToMany((type) => Payment, (payment) => payment.order)
    public payments: Payment[];
}
