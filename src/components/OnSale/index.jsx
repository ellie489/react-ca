import React from 'react';
import styled from 'styled-components';

const OnSaleLabel = styled.div`
    color: red;
    font-weight: bold;
`;

export function OnSale({ product }) {
    if (product.discountedPrice < product.price) {
        const discount = product.price - product.discountedPrice;
        return <OnSaleLabel>ON SALE - SAVE ${discount.toFixed(2)}</OnSaleLabel>;
    } else {
        return null;
    }
}
