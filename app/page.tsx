import { Link } from "@/components/faster-link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeStyleSelector } from "@/components/theme-style-selector";
import { SiGithub } from "@icons-pack/react-simple-icons";
export default function Home() {
  return (
    <div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="border-none shadow-none">
            <CardHeader className="text-center space-y-6">
              <CardTitle className="text-4xl sm:text-6xl font-bold tracking-tight">
                Break Free from the{" "}
                <span className="text-primary">Shadcn Look</span>
              </CardTitle>
              <CardDescription className="text-xl max-w-2xl mx-auto">
                Transform your UI with unique styling variants while keeping all
                the functionality you love from shadcn components.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/components">Explore Components</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/ameybh/unshadcn">
                  <SiGithub size={24} />
                  GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Unique Themes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Choose from a growing collection of carefully crafted themes
                  that break away from the standard shadcn look.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Full Functionality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maintain all the powerful features and accessibility of shadcn
                  components while enjoying a fresh look.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Drop-in replacement for shadcn components. Just install and
                  start using with your preferred theme.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Theme Style Selector Section */}
        <section className="container mx-auto px-4 py-20">
          <ThemeStyleSelector />
        </section>

        {/* Theme Preview Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Available Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600" />
                  <CardHeader>
                    <CardTitle>Forza Horizon</CardTitle>
                    <CardDescription>
                      Racing-inspired UI components with dynamic and energetic
                      styling.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" asChild className="p-0">
                      <Link href="/themes/forza">View Theme →</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">
                Ready to Transform Your UI?
              </CardTitle>
              <CardDescription className="max-w-2xl mx-auto">
                Join the community of developers who are breaking free from the
                standard shadcn look.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/docs">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
