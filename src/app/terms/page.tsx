import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center pt-20 max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h2>
            <p className="text-lg text-muted-foreground">Last updated: October 26, 2024</p>
        </div>
        <Card className="max-w-4xl mx-auto bg-card border p-6 md:p-10">
            <CardHeader>
                <CardTitle className="text-2xl text-primary">Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                
                <h3 className="text-xl font-semibold text-foreground pt-4">Use of Services</h3>
                <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.</p>
                
                 <h3 className="text-xl font-semibold text-foreground pt-4">Intellectual Property</h3>
                <p>All content included on the site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Orbiveda or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.</p>
                
                <h3 className="text-xl font-semibold text-foreground pt-4">Limitation of Liability</h3>
                <p>In no event shall Orbiveda, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

                 <h3 className="text-xl font-semibold text-foreground pt-4">Contact Us</h3>
                <p>If you have any questions about these Terms, please contact us at: orbiveda@gmail.com</p>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
