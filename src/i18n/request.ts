import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";

const messages = {
  en: enMessages,
  ar: arMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "ar")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as "en" | "ar"] ?? messages.en,
  };
});
