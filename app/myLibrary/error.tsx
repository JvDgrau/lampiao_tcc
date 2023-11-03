"use client";

import Box from "@/components/Box";

const Error = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <div className="text-neutral-400">
        Algo deu errado, verifique sua rede ou entre em contato com o nosso
        suporte.
      </div>
    </Box>
  );
};

export default Error;
