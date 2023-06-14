import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const sampleProducts = [
  {
    id: 1,
    price: 10,
    name: "Note",
    description: "A note",
  },
  {
    id: 2,
    price: 5,
    name: "Pen",
    description: "A pen",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {sampleProducts.map((prod) => {
          return <ProductItem key={prod.id} product={prod} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
