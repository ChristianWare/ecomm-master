import { products } from "@wix/stores"

interface DiscountBadgeProps {
    data: products.Discount;
}

export default function DiscountBadge({ data } : DiscountBadgeProps) {
    if (data.type !== "PERCENT") {
        return null
    }

    return <div>-{data.value}%</div>
}