import nodemailer from 'nodemailer'

const sendEmail = async (name: string, email: string, message: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.resend.com',
      secure: true,
      port: 465,
      auth: {
        user: 'resend',
        pass: 're_123456789',
      },
    })

    const info = await transporter.sendMail({
      from: 'onboarding@resend.dev',
      to: 'aimbererm@gmail.com',  // Substitua pelo seu e-mail de destino
      subject: `Message from ${name}`,
      html: `<p>${message}</p><p>Email: ${email}</p>`,
    })

    console.log('Message sent: %s', info.messageId)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export async function POST (req: Request) {
  const data = await req.json()
  console.log(data)
  const response = {
    status: 'success',
    message: 'Email sent',
  }
  return new Response(JSON.stringify(response))
}
