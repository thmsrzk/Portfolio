'use client'

import { Contact } from "@/src/types/About";
import ContactIcons from "@/src/components/ContactIcons";
import ContactForm from "@/src/components/ContactForm";
import { useTranslation } from "react-i18next";

interface ContactCardProps {
  card: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ card }) => {
  const { t } = useTranslation("AboutPage");
  const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col sm:flex-row sm:m-5 w-full gap-12 sm:gap-6 overflow-y-auto sm:overflow-y-auto'>
      <section className='sm:flex-1 flex flex-col gap-10 justify-center items-center sm:items-start'>
        <p className="text-xl">
          {t("contact.contactInfo")}
        </p>
        <ContactIcons direction="row" iconSize="text-3xl" />
        <p className="text-xl">{t("contact.contactForm")}</p>
      </section>
      <section className='sm:flex-1 flex flex-col gap-2 justify-center items-center'>
        <ContactForm onSubmit={handleFormSubmit} />
      </section>
    </div>
  );
};

export default ContactCard;