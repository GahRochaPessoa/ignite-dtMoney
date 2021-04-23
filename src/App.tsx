import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./Components/Dashboard";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={() => setIsNewTransactionModalOpen(true)}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => setIsNewTransactionModalOpen(false)}
      />
    </TransactionsProvider>
  );
}
