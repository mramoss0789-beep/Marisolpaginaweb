import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EvaluationWizard } from "@/components/EvaluationWizard";

export default function EvaluationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <EvaluationWizard />
            <Footer />
        </main>
    );
}
