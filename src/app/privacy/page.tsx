import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center pt-20 max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-lg text-muted-foreground">Last updated: October 26, 2024</p>
        </div>
        <Card className="max-w-4xl mx-auto bg-card border p-6 md:p-10">
            <CardHeader>
                <CardTitle className="text-2xl text-primary">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>Welcome to Orbiveda. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                
                <h3 className="text-xl font-semibold text-foreground pt-4">Information We Collect</h3>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
                
                 <h3 className="text-xl font-semibold text-foreground pt-4">Use of Your Information</h3>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, email you regarding your account or order, and send you a newsletter.</p>
                
                <h3 className="text-xl font-semibold text-foreground pt-4">Security of Your Information</h3>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                 <h3 className="text-xl font-semibold text-foreground pt-4">Contact Us</h3>
                <p>If you have questions or comments about this Privacy Policy, please contact us at: orbiveda@gmail.com</p>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
