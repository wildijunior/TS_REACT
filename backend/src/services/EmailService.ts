interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(req: IMessageDTO): void;
}

// DATA TRASNSFER OBJECT (DDD)
// conceito utilizado no DDD é um objeto para transferencia de dados
// quando criamos uma interface para definir como os dados trafegam entre dois arquivos diferentes
// dentro da nossa aplicacao, chamamos de DTO

class EmailService implements EmailService{
  // metodo para enviar mensagem
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
