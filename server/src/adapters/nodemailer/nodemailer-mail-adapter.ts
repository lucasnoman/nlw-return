import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '40767f07d66495',
    pass: '214404ee50e0db',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Noman <lucas.noman7@gmail.com>',
      subject: subject,
      html: body,
    });
  }
}
