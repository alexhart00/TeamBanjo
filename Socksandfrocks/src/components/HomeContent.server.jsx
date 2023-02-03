import products from "../assets/database/products.json"

export default function HomepageContent() {
    return(
          <div>{products.map((item, i) => <li key={i}>{item.id} - {item.style}</li>)}</div>
    );
  }

