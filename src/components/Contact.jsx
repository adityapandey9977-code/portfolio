import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending with realistic network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus(null);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Work Together
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-xl">
            Have a project, opportunity or collaboration in mind? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80">
              <h3 className="text-lg font-bold text-slate-900 mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        onClick={() => {
                          navigator.clipboard?.writeText(personalInfo.email);
                          setCopiedEmail(true);
                          setTimeout(() => setCopiedEmail(false), 2000);
                        }}
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors truncate block"
                        title="Click to email or copy"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy email address"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        LinkedIn
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        linkedin.com/in/aditya-pandey
                      </p>
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-slate-400 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-800 shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        GitHub
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                        github.com/adityapandey9977
                      </p>
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status banner */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-800 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 shrink-0" />
              <span>
                Actively seeking Junior / Mid-Level MERN developer roles, internships, and collaborative software engineering projects.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              {submitStatus === 'success' ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-slate-800">{formData.name}</span>. I'll get back to you as soon as possible at <span className="font-semibold text-slate-800">{formData.email}</span>.
                  </p>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 text-left max-w-md mx-auto">
                    <strong>Note for recruiters & developers:</strong> Frontend validation simulated successfully. To wire this to an active email service, plug in EmailJS or Formspree API keys in <code className="bg-amber-100 px-1 py-0.5 rounded">src/components/Contact.jsx</code>.
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border transition-colors outline-none ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border transition-colors outline-none ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Collaboration"
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border transition-colors outline-none ${
                        errors.subject
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Aditya, I'd like to discuss an opportunity..."
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border transition-colors outline-none resize-none ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl shadow-md shadow-blue-500/25 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
