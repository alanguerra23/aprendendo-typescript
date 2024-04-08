class EmailService {
  sendMail(to: { name: string, email: string }, message: { subject: string, body: string, attachment?: string[] }) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
};

export default EmailService;
