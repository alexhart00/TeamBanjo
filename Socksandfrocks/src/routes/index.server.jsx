import { Suspense } from "react";

import HomeContent from "../components/HomeContent.server";
import { Layout } from "../components/Layout.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <HomeContent />
      </Suspense>
    </Layout>
  );
}
