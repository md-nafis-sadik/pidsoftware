import { useState } from "react";
import Navbar from "./Navbar";
import MyAccountNav from "./MyAccountNav";
import Products from "./Products";
import Balance from "./Balance";
import BillingHistories from "./BillingHistories";
import ApiKey from './ApiKey';


export default function MyAccount() {
  const [activeSection, setActiveSection] = useState("Products");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Products":
        return <Products />;
      case "Balance":
        return <Balance />;
      case "ApiKey":
        return <ApiKey />;
        case "BillingHistories":
        return <BillingHistories />;
      default:
        return <Products />;
    }
  };

  return (
    <section>
      <Navbar />
      <MyAccountNav setActiveSection={setActiveSection} />
      {renderActiveSection()}
    </section>
  );
}
