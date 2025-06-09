import { WHATSAPP_NUMBER } from "@/config";

export const redirectToWhatsApp = () =>
  (window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`);
