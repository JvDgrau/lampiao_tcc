"use client";

import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useAuthModal from "@/hooks/useAuthModal";

import Modal from "./Modal";

const AuthModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();

  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="Bem vindo ao Lampião"
      description="Apoiando escritores e leitores desde 2023."
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={["google"]}
        magicLink={true}
        localization={{
          variables: {
            sign_up: {
              email_label: "Endereço de e-mail",
              password_label: "Criar uma senha",
              email_input_placeholder: "Seu endereço de e-mail",
              password_input_placeholder: "Sua senha",
              button_label: "Registrar",
              loading_button_label: "Registrando...",
              social_provider_text: "Entrar com {{provider}}",
              link_text: "Não tem uma conta? Registre-se",
              confirmation_text:
                "Verifique seu e-mail para o link de confirmação",
            },
            sign_in: {
              email_label: "Endereço de e-mail",
              password_label: "Sua senha",
              email_input_placeholder: "Seu endereço de e-mail",
              password_input_placeholder: "Sua senha",
              button_label: "Entrar",
              loading_button_label: "Entrando...",
              social_provider_text: "Entrar com {{provider}}",
              link_text: "Já tem uma conta? Entre",
            },
            magic_link: {
              email_input_label: "Endereço de e-mail",
              email_input_placeholder: "Seu endereço de e-mail",
              button_label: "Enviar link mágico",
              loading_button_label: "Enviando link mágico...",
              link_text: "Enviar um e-mail com o link mágico",
              confirmation_text: "Verifique seu e-mail para o link mágico",
            },
            forgotten_password: {
              email_label: "Endereço de e-mail",
              password_label: "Sua senha",
              email_input_placeholder: "Seu endereço de e-mail",
              button_label: "Enviar instruções de redefinição de senha",
              loading_button_label: "Enviando instruções de redefinição...",
              link_text: "Esqueceu sua senha?",
            },
            update_password: {
              password_label: "Nova senha",
              password_input_placeholder: "Sua nova senha",
              button_label: "Atualizar senha",
              loading_button_label: "Atualizando senha...",
              confirmation_text: "Sua senha foi atualizada",
            },
            verify_otp: {
              email_input_label: "Endereço de e-mail",
              email_input_placeholder: "Seu endereço de e-mail",
              phone_input_label: "Número de telefone",
              phone_input_placeholder: "Seu número de telefone",
              token_input_label: "Token",
              token_input_placeholder: "Seu token OTP",
              button_label: "Verificar token",
              loading_button_label: "Verificando...",
            },
          },
        }}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#5A559C",
              },
            },
          },
        }}
        theme="dark"
      />
      <div className="flex justify-center items-center">
        <Image
          width={200}
          height={50}
          src="/images/cenarioLogin.png"
          alt="Lampiao logo"
        />
      </div>
    </Modal>
  );
};

export default AuthModal;
