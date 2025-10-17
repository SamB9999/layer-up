import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Configure route to handle large files and prevent static optimization during build
export const runtime = 'nodejs'
export const maxDuration = 60
export const dynamic = 'force-dynamic'
export const revalidate = 0

// POST handler for enquiry form submissions
export async function POST(request) {
  try {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact stephen.rx782@gmail.com directly.' },
        { status: 500 }
      )
    }

    // Initialize Resend at runtime (not at build time)
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    // Parse form data
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const file = formData.get('file')

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepare file information if a file was uploaded
    let fileInfo = 'No file attached'
    let attachments = []

    if (file && file.size > 0) {
      // Get file details
      const fileName = file.name
      const fileSize = (file.size / 1024).toFixed(2) // Convert to KB
      const fileType = file.type || 'Unknown'
      
      fileInfo = `
        File Name: ${fileName}
        File Size: ${fileSize} KB
        File Type: ${fileType}
      `

      // Convert file to buffer for email attachment
      try {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        attachments.push({
          filename: fileName,
          content: buffer,
        })
      } catch (fileError) {
        console.error('Error processing file:', fileError)
        // Continue without attachment if there's an error
        fileInfo += '\n(Note: File could not be attached to email)'
      }
    }

    // Compose email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #3B82F6;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: bold;
              color: #374151;
              margin-bottom: 5px;
            }
            .field-value {
              color: #1f2937;
              background-color: white;
              padding: 10px;
              border-radius: 4px;
              border: 1px solid #e5e7eb;
            }
            .file-info {
              background-color: #dbeafe;
              padding: 10px;
              border-radius: 4px;
              border-left: 4px solid #3B82F6;
              white-space: pre-line;
            }
            .footer {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Enquiry from Layer Up</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="field">
                <div class="field-label">File Information:</div>
                <div class="file-info">${fileInfo}</div>
              </div>
              
              <div class="footer">
                <p>This enquiry was submitted via the Layer Up website contact form.</p>
                <p>Please respond to ${email} to continue the conversation.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version for email clients that don't support HTML
    const emailText = `
New Enquiry from Layer Up

Name: ${name}
Email: ${email}

Message:
${message}

File Information:
${fileInfo}

---
This enquiry was submitted via the Layer Up website contact form.
Please respond to ${email} to continue the conversation.
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Layer Up Website <onboarding@resend.dev>', // Use your verified domain in production
      to: ['sam.bousounis@gmail.com'], // Change to stephen.rx782@gmail.com after verifying in Resend
      replyTo: email,
      subject: `New 3D Printing Enquiry from ${name}`,
      html: emailHtml,
      text: emailText,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (error) {
      console.error('Resend API error:', error)
      console.error('Error details:', JSON.stringify(error))
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please email stephen.rx782@gmail.com directly.',
          details: error.message || 'Unknown error'
        },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry submitted successfully',
        emailId: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing enquiry:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please email stephen.rx782@gmail.com directly.',
        details: error.message
      },
      { status: 500 }
    )
  }
}

// Reject other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

