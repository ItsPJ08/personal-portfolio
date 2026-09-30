import emailjs from '@emailjs/browser';

// Matches the variables configured in the EmailJS dashboard template
interface EmailTemplateParams extends Record<string, unknown> {
  title: string;
  name: string;
  message: string;
}

export const sendEmail = async (params: EmailTemplateParams) => {
  const response = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    params,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  return response;
};
