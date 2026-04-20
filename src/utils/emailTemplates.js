export const customerEmailTemplate = (data) => `
  <div style="font-family: Georgia, 'Times New Roman', serif; background-color:#f7f1ed; padding:30px;">
    <div style="max-width:600px; margin:auto; background:white; padding:30px; border:1px solid #e6d8cc;">
      
      <h1 style="text-align:center; color:#b28c49; letter-spacing:2px; font-size:22px;">
        MANIRATNA JEWELS
      </h1>

      <hr style="border:none; border-top:1px solid #e6d8cc; margin:20px 0;" />

      <p style="font-size:16px; color:#333;">
        Dear ${data.name},
      </p>

      <p style="font-size:15px; color:#555; line-height:1.7;">
        Thank you for reaching out to us ✨
        We truly appreciate your interest in our <b>${data.collection}</b> collection.
      </p>

      <br />

      <p style="font-size:15px; color:#555; line-height:1.7;">
        Our team will personally connect with you shortly to share details, pricing, and help you find the perfect piece.
      </p>

      <div style="text-align:center; margin:30px 0;">
        <a href="https://wa.me/919448793711" style="background:#b28c49; color:white; padding:12px 24px; text-decoration:none; font-weight:bold; border-radius:4px;">
           Chat on WhatsApp
        </a>
      </div>

      <p style="font-size:13px; color:#888; text-align:center;">
        © MANIRATNA JEWELS
        <br/>  
        CRAFTED TO MAKE YOU STAND OUT  
      </p>

    </div>
  </div>
`;

export const adminEmailTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; background:#f7f1ed; padding:20px;">
    <div style="max-width:600px; margin:auto; background:white; padding:25px; border-left:4px solid #b28c49;">
      
      <h2 style="color:#b28c49;">💎 New Enquiry</h2>

      <p><b>Name:</b> ${data.name}</p>
      <p><b>Business:</b> ${data.businessName}</p>
      <p><b>Collection:</b> ${data.collection}</p>
      <p><b>Message:</b><br/> ${data.message}</p>

      <hr/>

      <p style="font-size:12px; color:#777;">
        Submitted from MANIRATNA JEWELS website
      </p>

    </div>
  </div>
`;