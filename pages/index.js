// src/pages/index.js
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ici, vous pourriez charger les données depuis votre API ou base de données
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur la plateforme de benchmarking</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
