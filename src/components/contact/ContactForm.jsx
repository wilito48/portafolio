import { useEffect, useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaGlobe, FaPaperPlane, FaUser } from 'react-icons/fa';
import Button from '../ui/Button';
import { GLASS_CARD } from './styles';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };
const NOTICE_DURATION = 6000;

const FIELD_CLASSES =
  'w-full rounded-xl border-2 border-gray-200 bg-white/80 p-4 text-base text-ink transition-all placeholder:text-slate-400 focus:-translate-y-px focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] focus:outline-none dark:border-slate-600 dark:bg-slate-700/80';

const fields = [
  { name: 'name', type: 'text', icon: FaUser },
  { name: 'email', type: 'email', icon: FaEnvelope },
  { name: 'subject', type: 'text', icon: FaGlobe },
  { name: 'message', multiline: true, icon: FaPaperPlane },
];

const buildMailto = ({ name, email, subject, message }) => {
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSent, setIsSent] = useState(false);
  const { form } = useLanguage().t.contact;

  useEffect(() => {
    if (!isSent) return undefined;
    const timer = setTimeout(() => setIsSent(false), NOTICE_DURATION);
    return () => clearTimeout(timer);
  }, [isSent]);

  const handleChange = ({ target }) => {
    setFormData((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(formData);
    setFormData(EMPTY_FORM);
    setIsSent(true);
  };

  return (
    <div data-reveal className={GLASS_CARD}>
      <div className="mb-8 flex items-center gap-4">
        <FaPaperPlane className="text-2xl text-emerald-500" aria-hidden="true" />
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{form.title}</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {fields.map(({ name, type, icon: Icon, multiline }) => {
          const { label, placeholder } = form[name];
          const inputProps = {
            id: name,
            name,
            value: formData[name],
            onChange: handleChange,
            placeholder,
            required: true,
            className: FIELD_CLASSES,
          };

          return (
            <div key={name} className="flex flex-col gap-2">
              <label
                htmlFor={name}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                <Icon className="text-blue-500" aria-hidden="true" />
                {label} *
              </label>
              {multiline ? (
                <textarea {...inputProps} rows="5" className={`${FIELD_CLASSES} min-h-[120px] resize-y`} />
              ) : (
                <input {...inputProps} type={type} />
              )}
            </div>
          );
        })}

        <Button type="submit" className="w-full">
          <FaPaperPlane aria-hidden="true" />
          {form.submit}
        </Button>
      </form>

      {isSent && (
        <div
          role="status"
          className="mt-6 flex items-center gap-4 rounded-xl bg-[linear-gradient(135deg,#10b981,#059669)] p-6 text-white shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
        >
          <FaCheckCircle className="shrink-0 text-2xl" aria-hidden="true" />
          <div>
            <h4 className="mb-1 text-lg font-semibold">{form.sentTitle}</h4>
            <p className="opacity-90">{form.sentText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
