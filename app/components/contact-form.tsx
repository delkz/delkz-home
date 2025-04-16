'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import SectionTitle from './section-title';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
    sitekey: string;
}

const ContactForm = ({ sitekey }: ContactFormProps) => {
    const t = useTranslations('ContactForm');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert('Please complete the reCAPTCHA');
            return;
        }

        console.log('Form submitted:', formData);

        fetch('/api/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: formData.email,
                subject: `NOVO CONTATO VIA SITE`,
                text: `
                -----------------------
                | Nome: ${formData.name}
                | Email: ${formData.email} 
                -----------------------
                Mensagem:
                ${formData.message} 
                `,
                recaptchaToken, // Send the token to the server for verification
            }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Email sent successfully');
                } else {
                    console.error('Failed to send email');
                }
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full mx-auto my-10 bg-white space-y-4"
        >
            <SectionTitle title={t("title")} subtitle={t("subtitle")} />

            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    {t('name.label')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('name.placeholder')}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    {t('email.label')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('email.placeholder')}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                >
                    {t('message.label')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('message.placeholder')}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* reCAPTCHA */}
            
            <ReCAPTCHA
                sitekey={sitekey} // Replace with your site key
                onChange={handleRecaptchaChange}
            />

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {t('submit.label')}
            </button>
        </form>
    );
};

export default ContactForm;