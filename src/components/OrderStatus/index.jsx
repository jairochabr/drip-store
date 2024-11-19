import React from 'react';
import { StatusSection, StatusHeader, ProductStatus, ProductDetails, Status } from './style';
import Tennis from '../../assets/tennis/sneakers.png';

export function OrderStatus() {
    const orders = [
        {
            id: '2234981932',
            title: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: Tennis,
            status: 'Finalizado',
        },
        {
            id: '2234981933',
            title: 'Camiseta Esportiva Adidas Masculina',
            image: Tennis,
            status: 'Em trânsito',
        },
        {
            id: '2234981934',
            title: 'Shorts Nike Dry Masculino',
            image: Tennis,
            status: 'Cancelado',
        },
    ];

    return (
        <StatusSection>
            <StatusHeader>
                <span>Meus Pedidos</span>
                <span>STATUS</span>
            </StatusHeader>
            {orders.map((order) => (
                <ProductStatus key={order.id}>
                    <ProductDetails>
                        <div className="image">
                            <img src={order.image} alt={order.title} />
                        </div>
                        <div className="details">
                            <span>Pedido nº {order.id}</span>
                            <span>{order.title}</span>
                        </div>
                    </ProductDetails>
                    <Status status={order.status}>
                        <span>{order.status}</span>
                    </Status>
                </ProductStatus>
            ))}
        </StatusSection>
    );
}
