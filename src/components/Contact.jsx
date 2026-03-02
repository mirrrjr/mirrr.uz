import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const telegramMessage = `
New Contact Message:

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}
`;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: telegramMessage,
                    }),
                }
            );

            if (!response.ok) throw new Error("Telegram API error");

            alert("Message sent successfully 🚀");
            setForm({
                name: '',
                email: '',
                website: '',
                message: ''
            });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:my-16 lg:px-28 my-8 px-5'
            id='contact'
        >
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='text-2xl lg:text-4xl text-center'
            >
                Contact <span className='font-extrabold'>Me</span>
            </motion.h2>

            <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className='lg:w-[40%]'
                >
                    <form onSubmit={handleSubmit} className='w-full space-y-3 lg:space-y-5'>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className='border-2 px-5 py-3 border-black rounded text-sm w-full'
                            type="text"
                            placeholder='Your name'
                            required
                        />

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className='border-2 px-5 py-3 border-black rounded text-sm w-full'
                            type="email"
                            placeholder='Email'
                            required
                        />

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className='resize-none border-2 px-5 py-3 h-32 border-black rounded text-sm w-full'
                            placeholder='How can I help?'
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            type='submit'
                            disabled={loading}
                            className='bg-black text-white px-3 py-2 rounded flex items-center justify-center font-medium'
                        >
                            {loading ? "Sending..." : "Get In Touch"}
                        </motion.button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className='lg:w-1/2'
                >
                    <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
                        <h2>Let&apos;s <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
                        <h2>Something special</h2>
                    </div>

                    <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

                    <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
                        <motion.a
                            whileHover={{ x: 5 }}
                            className='flex items-center gap-2 group'
                            href="mailto:mirrrrjr@gmail.com"
                        >
                            <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
                            </span>
                            mirrrrjr@gmail.com
                        </motion.a>

                        <motion.a
                            whileHover={{ x: 5 }}
                            className='flex items-center gap-2 group'
                            href="tele:+998993490698"
                        >
                            <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
                            </span>
                            +998993490698
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
