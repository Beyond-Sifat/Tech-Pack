"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO / BANNER */}
      <section className="py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Honest Reviews. Real Opinions.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          A minimal review platform where users share authentic experiences
          without noise, ads, or distractions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-black text-white hover:bg-black/90">
            Add a Review
          </Button>
          <Button variant="outline">My Reviews</Button>
        </div>
      </section>

      <Separator />

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why This Platform?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Minimal & Focused</h3>
              <p className="text-sm text-muted-foreground">
                Black and white design to keep attention on content, not clutter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">User-Owned Content</h3>
              <p className="text-sm text-muted-foreground">
                Users fully control their reviews with edit and delete options.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Secure by Design</h3>
              <p className="text-sm text-muted-foreground">
                JWT-based authentication with protected user actions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl font-bold">01</span>
            <h4 className="mt-4 font-medium">Sign In</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Authenticate securely using email and password.
            </p>
          </div>
          <div>
            <span className="text-4xl font-bold">02</span>
            <h4 className="mt-4 font-medium">Write a Review</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Share your experience through a simple review form.
            </p>
          </div>
          <div>
            <span className="text-4xl font-bold">03</span>
            <h4 className="mt-4 font-medium">Manage Your Posts</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Edit or delete your reviews anytime from My Posts.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold">
          Start Sharing Your Experience Today
        </h2>
        <p className="mt-4 text-muted-foreground">
          Join early and help shape the platform.
        </p>
        <div className="mt-6">
          <Button className="bg-black text-white hover:bg-black/90">
            Get Started
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Review Platform. All rights reserved.
      </footer> */}
    </main>
  );
}
