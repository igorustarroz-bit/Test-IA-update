import { G01Header } from "./modules/G01-Header/G01-Header";
import { M00Hero } from "./modules/M00-Hero/M00-Hero";
import { M00LatestActivity } from "./modules/M00-LatestActivity/M00-LatestActivity";
import { G03TemplateFooter } from "./modules/G03-TemplateFooter/G03-TemplateFooter";
import { G02Footer } from "./modules/G02-Footer/G02-Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-bg-base text-text-high">
      <G01Header />
      <M00Hero />
      <M00LatestActivity />
      <G03TemplateFooter />
      <G02Footer />
    </main>
  );
}
