export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
        <p className="text-muted mb-8">
          Your message has been sent successfully. We'll get back to you within one business day.
        </p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-hover transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}