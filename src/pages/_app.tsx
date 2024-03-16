import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <main className={`font-sans ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
