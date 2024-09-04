import ContactForm from "@/components/contact-form/contact-form";

interface ContactPageProps {}

export default function Contact({}: ContactPageProps) {
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="m-4">
        <ContactForm />
      </div>
    </div>
  );
}
