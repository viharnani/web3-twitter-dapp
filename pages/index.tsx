import { useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import UserStatus from "../components/userStatus";
import StatusEvents from "../components/statusEvents";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Set a timeout for 2 seconds
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 5000);

      // Cleanup the timer when the component is unmounted
      return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
      return (
          <div className={styles.pageLoading}>
              {/* You can add a loading indicator here if needed */}
              <p>Loading...</p>
          </div>
      );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.statusContainer}>
          <UserStatus />
        </div>
        <h3>Status Feed:</h3>
        <StatusEvents />
      </div>
    </main>
  );
};

export default Home;
