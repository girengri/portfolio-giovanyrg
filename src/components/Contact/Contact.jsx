import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
    const { t } = useLanguage();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [isSending, setIsSending] = useState(false);

    const onSubmit = (data) => {
        setIsSending(true);
        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                "YOUR_PUBLIC_KEY",
            )
            .then(() => {
                alert(t("contact_success"));
                reset();
            })
            .catch(() => {
                alert(t("contact_error"));
            })
            .finally(() => setIsSending(false));
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <h2>{t("contact_title")}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.field}>
                        <label>{t("contact_name")}</label>
                        <input
                            {...register("name", { required: t("contact_required") })}
                            placeholder={t("contact_name")}
                        />
                        {errors.name && (
                            <span className={styles.error}>{errors.name.message}</span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>{t("contact_email")}</label>
                        <input
                            {...register("email", {
                                required: t("contact_required"),
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: t("contact_invalid_email"),
                                },
                            })}
                            placeholder={t("contact_email")}
                        />
                        {errors.email && (
                            <span className={styles.error}>{errors.email.message}</span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>{t("contact_message")}</label>
                        <textarea
                            {...register("message", {
                                required: t("contact_required"),
                                minLength: {
                                    value: 10,
                                    message: t("contact_min_length"),
                                },
                            })}
                            rows="5"
                            placeholder={t("contact_message")}
                        />
                        {errors.message && (
                            <span className={styles.error}>{errors.message.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSending}
                    >
                        {isSending ? "⏳ Enviando..." : t("contact_send")}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
