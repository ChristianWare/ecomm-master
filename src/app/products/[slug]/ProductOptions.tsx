import { products } from "@wix/stores";

interface ProductOptionsProps {
  product: products.Product;
}

export default function ProductOptions({ product }: ProductOptionsProps) {
  return (
    <div>
      <h4>Product Options</h4>
      {product.productOptions?.map((option) => (
        <fieldset key={option.name}>
          <legend>
            <span>{option.name}</span>
          </legend>
          <div>
            {option.choices?.map((choice) => (
              <div key={choice.description}>
                <input
                  type='radio'
                  id={choice.description}
                  name={option.name}
                  value={choice.description}
                />
                {choice.description}
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
