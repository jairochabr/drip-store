import React, { useState } from "react";
import { OrdersMenu } from "@/components/OrdersMenu";
import { OrderStatus } from "@/components/OrderStatus";
// import { UserProfile } from "@/components/UserProfile";
import { UserInformations } from "@/components/OrderInformation";
// import { PaymentMethods } from "@/components/PaymentMethods";
import { OrderPageContainer, Sidebar, ContentArea } from "./style";

export function OrderPage() {
  const [selectedComponent, setSelectedComponent] = useState("profile");

  const renderContent = () => {
    switch (selectedComponent) {
      // case "profile":
      //   return <UserProfile />;
      case "orders":
        return <OrderStatus />;
      case "informations":
        return <UserInformations />;
      // case "payment":
      //   return <PaymentMethods />;
      default:
        return <OrderStatus />;
    }
  };

  return (
    <OrderPageContainer>
      <Sidebar>
        <OrdersMenu onSelect={setSelectedComponent} />
      </Sidebar>
      <ContentArea>
        {renderContent()}
      </ContentArea>
    </OrderPageContainer>
  );
}
