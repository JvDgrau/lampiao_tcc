"use client";

import React from "react";
import useSubscribeModal from "@/hooks/useSubscribeModal";

import Modal from "./Modal";

const SubscribeModal = () => {
  const subscribeModal = useSubscribeModal();

  const onChange = (open: boolean) => {
    if (!open) {
      subscribeModal.onClose();
    }
  };

  let content = (
    <div className="text-center">
      Para adicionar um livro, você precisa se cadastrar.
    </div>
  );

  return (
    <Modal
      title="Sua Biblioteca"
      description="Compartilhe seus livros e fanfics favoritas com seus amigos"
      isOpen={subscribeModal.isOpen}
      onChange={onChange}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
