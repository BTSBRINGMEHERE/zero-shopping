import Card from "../../components/card/Card";
import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Digital.module.scss";

const Digital = () => {
  const product = useAppSelector((state) => state.product.products);

  const digital = product.filter((item) => item.category === "electronics");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>디지털</h1>
      <div className={styles.section}>
        <ul className={styles.list_container}>
          {digital.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              price={item.price}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Digital;
